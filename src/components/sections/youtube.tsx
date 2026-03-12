"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, Youtube, TrendingUp, Eye } from "lucide-react"

interface ShortItem {
  id: string
  title: string
  thumbnail: string
  views: string
  videoId: string
  publishedAt: string
}

export default function YouTubeSection() {
  const [shorts, setShorts] = useState<ShortItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()

    async function loadShorts() {
      try {
        setLoading(true)
        setError("")

        const response = await fetch("/api/youtube/shorts?limit=4", {
          signal: controller.signal,
        })
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data?.error || "Failed to load shorts.")
        }

        setShorts(Array.isArray(data?.items) ? data.items : [])
      } catch (fetchError) {
        if ((fetchError as Error).name !== "AbortError") {
          const message =
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to fetch YouTube shorts."
          setError(message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadShorts()

    return () => controller.abort()
  }, [])

  const handleVideoClick = (videoId: string) => {
    window.open(
      `https://www.youtube.com/shorts/${videoId}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-5 py-2 rounded-full mb-4">
            <Youtube className="w-5 h-5" />
            <span className="font-semibold text-sm">Watch Our Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent">
            Explore Our Videos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get insider tips, property tours, and expert advice on real estate investment
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-green-600 to-green-600 p-3 rounded-2xl shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">YouTube Shorts</h3>
                <p className="text-gray-600">Quick tips and property highlights</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@greenhomesproperty"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-5 h-5" />
              View All
            </a>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl bg-gray-200 animate-pulse aspect-[3/4]"
                />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
              <p className="text-red-700 font-medium">Failed to load YouTube shorts</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          ) : shorts.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <p className="text-gray-700 font-medium">No shorts found right now.</p>
              <p className="text-gray-500 text-sm mt-1">
                Please add shorts in your channel and refresh.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {shorts.slice(0, 4).map((short) => (
                <div
                  key={short.id}
                  className="group cursor-pointer relative"
                  onClick={() => handleVideoClick(short.videoId)}
                >
                  <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:border-green-200 group-hover:shadow-[0_18px_34px_rgba(22,163,74,0.18)]">
                    <div className="relative aspect-[3/4] bg-black">
                      <Image
                        src={short.thumbnail}
                        alt={short.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/80">
                        <span className="text-green-600 font-bold text-xs tracking-wide">SHORT</span>
                      </div>
                      <div className="absolute right-3 bottom-3 bg-white/95 rounded-full p-2.5 shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <Play className="w-4 h-4 text-green-600 fill-green-600 ml-0.5" />
                      </div>
                    </div>
                    <div className="p-3.5">
                      <p className="text-sm font-semibold text-gray-900 line-clamp-2 leading-5 min-h-10">
                        {short.title}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-gray-600">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{short.views} views</span>
                        </div>
                        <span className="text-green-600 font-semibold">Watch now</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
