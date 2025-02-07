import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images = [] }) => {
  if (!images.length) return null;

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={`${image}-${index}`} className="pl-4 basis-auto">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="max-h-96 w-auto object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;