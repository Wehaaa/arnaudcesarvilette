'use client'
import BrandsCarousel from "@/components/globals/brand/BrandCarousel"

export default function HomeCarouselSection({ images }: { images: string[] }) {
  return <BrandsCarousel images={images} />
}