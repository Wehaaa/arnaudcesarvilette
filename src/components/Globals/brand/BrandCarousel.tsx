'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BrandCarouselProps {
  images: string[];
}

const BrandCarousel: React.FC<BrandCarouselProps> = ({ images = [] }) => {
  if (!images.length) return null;

  return (
    <Carousel className="w-full">
      <CarouselContent className="gap-6 pl-4">
        {images.map((image, index) => (
          <CarouselItem key={`${image}-${index}`} className="flex justify-center items-center pl-4 h-24 w-48 basis-auto p-4 border border-gray-200 rounded-lg">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-contain object-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-4 xl:-left-12 bg-white border-gray-500" />
      <CarouselNext className="-right-4 xl:-right-12 bg-white border-gray-500" />
    </Carousel>
  );
};

export default BrandCarousel;