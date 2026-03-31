"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

const TOTAL_FRAMES = 240;
const HERO_SCROLL_HEIGHT = "360vh";
const FRAME_FOLDER = "/hero-section";
const POSTER_FRAME_INDEX = 0;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(start: number, end: number, value: number) {
  if (start === end) {
    return value >= end ? 1 : 0;
  }

  const t = clamp((value - start) / (end - start), 0, 1);
  return t * t * (3 - 2 * t);
}

function frameUrl(index: number) {
  return `${FRAME_FOLDER}/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
}

export function Hero() {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(0);
  const progressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const hasPaintedFrameRef = useRef(false);

  const [loadedFrames, setLoadedFrames] = useState(0);
  const [failedFrames, setFailedFrames] = useState(0);
  const [hasRenderedFrame, setHasRenderedFrame] = useState(false);

  const resolvedFrames = loadedFrames + failedFrames;
  const preloadProgress = resolvedFrames / TOTAL_FRAMES;

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    if (!canvas || !context) {
      return false;
    }

    let image = imagesRef.current[frameIndex] ?? null;

    if (!image) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset += 1) {
        image =
          imagesRef.current[frameIndex - offset] ??
          imagesRef.current[frameIndex + offset] ??
          null;

        if (image) {
          break;
        }
      }
    }

    if (!image) {
      return false;
    }

    const viewportWidth = canvas.clientWidth || window.innerWidth;
    const viewportHeight = canvas.clientHeight || window.innerHeight;
    const imageRatio = image.naturalWidth / image.naturalHeight;
    const viewportRatio = viewportWidth / viewportHeight;
    const parallaxProgress = smoothstep(0.8, 1, progressRef.current);
    const zoom = 1.02 + parallaxProgress * 0.08;
    const yShift = -parallaxProgress * viewportHeight * 0.035;

    let drawWidth = viewportWidth;
    let drawHeight = viewportHeight;

    if (imageRatio > viewportRatio) {
      drawHeight = viewportHeight * zoom;
      drawWidth = drawHeight * imageRatio;
    } else {
      drawWidth = viewportWidth * zoom;
      drawHeight = drawWidth / imageRatio;
    }

    const offsetX = (viewportWidth - drawWidth) / 2;
    const offsetY = (viewportHeight - drawHeight) / 2 + yShift;

    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

    if (!hasPaintedFrameRef.current) {
      hasPaintedFrameRef.current = true;
      setHasRenderedFrame(true);
    }

    return true;
  };

  const syncFrameFromScroll = () => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const scrollableDistance = Math.max(
      section.offsetHeight - window.innerHeight,
      1
    );
    const nextProgress = clamp(-rect.top / scrollableDistance, 0, 1);
    const nextFrame = Math.round(nextProgress * (TOTAL_FRAMES - 1));

    progressRef.current = nextProgress;
    currentFrameRef.current = nextFrame;

    drawFrame(nextFrame);
  };

  const requestScrollUpdate = () => {
    syncFrameFromScroll();
  };

  const handleScrollIndicatorClick = () => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const nextTop = Math.min(
      window.scrollY + window.innerHeight * 0.9,
      section.offsetTop + section.offsetHeight - window.innerHeight
    );

    window.scrollTo({
      top: nextTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      contextRef.current = context;

      drawFrame(currentFrameRef.current);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    let isCancelled = false;

    imagesRef.current = Array.from({ length: TOTAL_FRAMES }, () => null);

    for (let index = 0; index < TOTAL_FRAMES; index += 1) {
      const image = new window.Image();

      image.decoding = "async";
      image.loading = "eager";
      image.src = frameUrl(index);

      image.onload = () => {
        if (isCancelled) {
          return;
        }

        imagesRef.current[index] = image;
        setLoadedFrames((count) => count + 1);

        if (index === 0 || index === currentFrameRef.current) {
          drawFrame(currentFrameRef.current);
        }
      };

      image.onerror = () => {
        if (isCancelled) {
          return;
        }

        setFailedFrames((count) => count + 1);
      };
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      syncFrameFromScroll();
      animationFrameRef.current = window.requestAnimationFrame(tick);
    };

    animationFrameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handlePageShow = () => {
      requestScrollUpdate();
    };

    const handleFocus = () => {
      requestScrollUpdate();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestScrollUpdate();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          requestScrollUpdate();
        }
      },
      { threshold: [0, 0.01, 0.25] }
    );

    const section = sectionRef.current;

    if (section) {
      observer.observe(section);
    }

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      requestScrollUpdate();
    }, 80);

    requestScrollUpdate();

    const rafId = window.requestAnimationFrame(() => {
      requestScrollUpdate();
    });

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: HERO_SCROLL_HEIGHT }}
    >
      {/* Outer white frame padding — creates the bordered card effect */}
      <div className="sticky top-20 h-[calc(100dvh-9rem-env(safe-area-inset-bottom))] px-3 pb-3 sm:h-[calc(100dvh-9rem-env(safe-area-inset-bottom))] sm:px-4 sm:pb-4 lg:h-[calc(100vh-5rem)] lg:pb-4">
        {/* Rounded hero card */}
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-gray-100 bg-white text-white sm:rounded-3xl">
          <Image
            src={frameUrl(POSTER_FRAME_INDEX)}
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover"
          />
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
              hasRenderedFrame ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10),transparent_40%)]" />

          {/* Content — split layout: heading bottom-left, description bottom-right */}
          <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-6 sm:px-10 sm:pb-10 sm:pt-8 lg:px-14 lg:pb-12">

            {/* Top bar */}
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-md sm:px-4 sm:text-[11px]">
                Cinematic Project Reveal
              </div>
              <div className="rounded-full border border-green-500/40 bg-green-500/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-green-200 backdrop-blur-md sm:px-4 sm:text-[11px]">
                Premium Real Estate
              </div>
            </div>

            {/* Bottom row — heading left, description+CTA right */}
            <div className="flex max-w-xl flex-col gap-5 lg:gap-6">

              {/* Left: Heading */}
              <div className="max-w-lg">
                <h1 className="font-serif text-[2rem] leading-[1.0] text-white sm:text-4xl md:text-5xl lg:text-[3.6rem]">
                  <span className="block">Discover Premium</span>
                  <span className="block text-green-400">Living Spaces</span>
                </h1>
              </div>

              {/* Right: Description + Buttons */}
              <div className="flex max-w-md flex-col gap-4">
                <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                  Luxury villas, modern apartments, and investment-ready
                  properties designed for the future.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-10 rounded-full bg-white px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-900 shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:h-11 sm:px-6 sm:text-xs"
                  >
                    <Link href="/properties">
                      Explore Projects
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-10 rounded-full border-white/30 bg-white/10 px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:h-11 sm:px-6 sm:text-xs"
                  >
                    <Link href="/contact">Book a Site Visit</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            aria-label="Scroll down"
            onClick={handleScrollIndicatorClick}
            className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-full lg:block"
          >
            <div className="flex h-11 w-6 items-start justify-center rounded-full border-2 border-white/60 bg-black/10 pt-1.5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5">
              <div className="h-2 w-0.5 rounded-full bg-white/80 animate-pulse" />
            </div>
          </button>

          {/* Preload progress */}
          {resolvedFrames < TOTAL_FRAMES ? (
            <div className="pointer-events-none absolute inset-x-4 bottom-6 z-20 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md sm:inset-x-auto sm:right-6 sm:w-[300px]">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.24em] text-white/65">
                <span>Loading cinematic frames</span>
                <span>{loadedFrames}/{TOTAL_FRAMES}</span>
              </div>
              <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-green-400 transition-[width] duration-300"
                  style={{ width: `${preloadProgress * 100}%` }}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
