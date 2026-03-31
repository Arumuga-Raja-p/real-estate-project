import { NextResponse } from "next/server";

interface YouTubeSearchItem {
  id?: {
    videoId?: string;
  };
}

interface YouTubeVideoItem {
  id: string;
  snippet?: {
    title?: string;
    description?: string;
    thumbnails?: {
      high?: { url?: string };
      medium?: { url?: string };
      default?: { url?: string };
    };
    publishedAt?: string;
  };
  contentDetails?: {
    duration?: string;
  };
  statistics?: {
    viewCount?: string;
  };
}

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const DEFAULT_CHANNEL_HANDLE = "greenhomesproperty";
const SHORTS_MAX_DURATION_SECONDS = 180;
const SEARCH_PAGE_SIZE = 25;
const MAX_SEARCH_RESULTS_TO_SCAN = 100;

function durationToSeconds(isoDuration?: string): number {
  if (!isoDuration) return 0;
  const matches = isoDuration.match(
    /P(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?/
  );
  if (!matches) return 0;

  const hours = Number(matches[1] || 0);
  const minutes = Number(matches[2] || 0);
  const seconds = Number(matches[3] || 0);

  return hours * 3600 + minutes * 60 + seconds;
}

function formatViews(viewCount?: string): string {
  const value = Number(viewCount || 0);
  if (!Number.isFinite(value)) return "0";
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return `${value}`;
}

function pickThumbnail(item: YouTubeVideoItem): string {
  return (
    item.snippet?.thumbnails?.high?.url ||
    item.snippet?.thumbnails?.medium?.url ||
    item.snippet?.thumbnails?.default?.url ||
    `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`
  );
}

function chunkArray<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    next: { revalidate: 600 },
  });

  if (!response.ok) {
    throw new Error(`YouTube API failed: ${response.status}`);
  }

  return response.json();
}

async function resolveChannelId(apiKey: string): Promise<string> {
  const explicitChannelId = process.env.YOUTUBE_CHANNEL_ID?.trim();
  if (explicitChannelId) return explicitChannelId;

  const handle =
    process.env.YOUTUBE_CHANNEL_HANDLE?.trim() || DEFAULT_CHANNEL_HANDLE;
  const normalizedHandle = handle.startsWith("@") ? handle.slice(1) : handle;

  const channelUrl = new URL(`${YOUTUBE_API_BASE}/channels`);
  channelUrl.searchParams.set("part", "id");
  channelUrl.searchParams.set("forHandle", normalizedHandle);
  channelUrl.searchParams.set("key", apiKey);

  const data = await fetchJson<{ items?: Array<{ id?: string }> }>(
    channelUrl.toString()
  );
  const channelId = data.items?.[0]?.id;
  if (!channelId) {
    throw new Error("Unable to resolve YouTube channel ID.");
  }

  return channelId;
}

export async function GET(request: Request) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        { error: "YOUTUBE_API_KEY is missing." },
        { status: 500 }
      );
    }

    const url = new URL(request.url);
    const limitRaw = Number(url.searchParams.get("limit") || "8");
    const limit = Number.isFinite(limitRaw)
      ? Math.min(Math.max(limitRaw, 1), 12)
      : 8;

    const channelId = await resolveChannelId(apiKey);

    const videoIds: string[] = [];
    let nextPageToken: string | undefined;

    while (videoIds.length < MAX_SEARCH_RESULTS_TO_SCAN) {
      const searchUrl = new URL(`${YOUTUBE_API_BASE}/search`);
      searchUrl.searchParams.set("part", "id");
      searchUrl.searchParams.set("channelId", channelId);
      searchUrl.searchParams.set("type", "video");
      searchUrl.searchParams.set("order", "date");
      searchUrl.searchParams.set("maxResults", `${SEARCH_PAGE_SIZE}`);
      searchUrl.searchParams.set("key", apiKey);

      if (nextPageToken) {
        searchUrl.searchParams.set("pageToken", nextPageToken);
      }

      const searchData = await fetchJson<{
        items?: YouTubeSearchItem[];
        nextPageToken?: string;
      }>(searchUrl.toString());

      const pageVideoIds = (searchData.items || [])
        .map((item) => item.id?.videoId)
        .filter((id): id is string => Boolean(id));

      if (pageVideoIds.length === 0) {
        break;
      }

      for (const videoId of pageVideoIds) {
        if (!videoIds.includes(videoId)) {
          videoIds.push(videoId);
        }
      }

      nextPageToken = searchData.nextPageToken;
      if (!nextPageToken) {
        break;
      }
    }

    if (videoIds.length === 0) {
      return NextResponse.json({ items: [] });
    }

    const limitedVideoIds = videoIds.slice(0, MAX_SEARCH_RESULTS_TO_SCAN);
    const videoOrder = new Map(
      limitedVideoIds.map((videoId, index) => [videoId, index])
    );
    const videoChunks = chunkArray(limitedVideoIds, 50);
    const videoItems: YouTubeVideoItem[] = [];

    for (const videoChunk of videoChunks) {
      const videosUrl = new URL(`${YOUTUBE_API_BASE}/videos`);
      videosUrl.searchParams.set("part", "snippet,contentDetails,statistics");
      videosUrl.searchParams.set("id", videoChunk.join(","));
      videosUrl.searchParams.set("key", apiKey);

      const videosData = await fetchJson<{ items?: YouTubeVideoItem[] }>(
        videosUrl.toString()
      );

      videoItems.push(...(videosData.items || []));
    }

    const items = videoItems
      .sort(
        (left, right) =>
          (videoOrder.get(left.id) ?? Number.MAX_SAFE_INTEGER) -
          (videoOrder.get(right.id) ?? Number.MAX_SAFE_INTEGER)
      )
      .filter((item) => {
        const duration = durationToSeconds(item.contentDetails?.duration);
        const title = item.snippet?.title?.toLowerCase() || "";
        const description = item.snippet?.description?.toLowerCase() || "";
        const markedAsShort =
          title.includes("#shorts") || description.includes("#shorts");
        return (
          (duration > 0 && duration <= SHORTS_MAX_DURATION_SECONDS) ||
          markedAsShort
        );
      })
      .slice(0, limit)
      .map((item) => ({
        id: item.id,
        title: item.snippet?.title || "YouTube Short",
        thumbnail: pickThumbnail(item),
        views: formatViews(item.statistics?.viewCount),
        videoId: item.id,
        publishedAt: item.snippet?.publishedAt || "",
      }));

    return NextResponse.json({ items });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch shorts.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
