'use client'
import BrandCarousel from "@/components/globals/brand/BrandCarousel"

export default function HomeCarouselSection({ images }: { images: string[] }) {
  return <BrandCarousel images={images} />
}