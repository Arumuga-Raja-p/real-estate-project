import {client} from "./sanity.client"

export type GalleryItem = {
  _key?: string
  title: string
  description?: string
  image: string
  category: "ongoing" | "completed"
}

export type GalleryPageData = {
  allProjectsLabel: string
  ongoingProjectsLabel: string
  completedProjectsLabel: string
  items: GalleryItem[]
}

type GalleryProjectEntry = Omit<GalleryItem, "category">

type GalleryQueryResult = {
  allProjectsLabel?: string
  ongoingProjectsLabel?: string
  completedProjectsLabel?: string
  ongoingProjects?: GalleryProjectEntry[]
  completedProjects?: GalleryProjectEntry[]
} | null

export async function fetchGalleryPage(): Promise<GalleryPageData | null> {
  const query = `*[_type == "galleryPage"][0]{
    allProjectsLabel,
    ongoingProjectsLabel,
    completedProjectsLabel,
    "ongoingProjects": ongoingProjects[]{
      _key,
      title,
      description,
      "image": image.asset->url
    },
    "completedProjects": completedProjects[]{
      _key,
      title,
      description,
      "image": image.asset->url
    }
  }`

  const data = await client.fetch<GalleryQueryResult>(query)

  const ongoingProjects = (data?.ongoingProjects || [])
    .filter((item): item is GalleryProjectEntry => Boolean(item?.title && item?.image))
    .map((item) => ({...item, category: "ongoing" as const}))

  const completedProjects = (data?.completedProjects || [])
    .filter((item): item is GalleryProjectEntry => Boolean(item?.title && item?.image))
    .map((item) => ({...item, category: "completed" as const}))

  const items = [...ongoingProjects, ...completedProjects]

  if (!items.length) {
    return null
  }

  return {
    allProjectsLabel: data?.allProjectsLabel || "All Projects",
    ongoingProjectsLabel: data?.ongoingProjectsLabel || "Ongoing Project",
    completedProjectsLabel: data?.completedProjectsLabel || "Completed Projects",
    items,
  }
}
