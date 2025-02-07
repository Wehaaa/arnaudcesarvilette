'use client'

import BrandCarousel from "../globals/brand/BrandCarousel"

export default function HomeCarouselSection({ images }: { images: string[] }) {
  return <BrandCarousel images={images} />
}