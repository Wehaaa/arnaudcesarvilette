'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { PostItem } from '@/components/post/listing/PostItem';
import { Posts } from '@/types/post';
import { ChevronLeft, ChevronRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';

export default function PostSwiper({ posts }: Posts): JSX.Element {
  return (
    <div className="relative post-swiper">
      <button className="custom-swiper-prev absolute top-1/2 -translate-y-1/2 -left-12 z-10">
        <ChevronLeft size={32} className="text-gray-700 hover:text-gray-900" />
      </button>

      <button className="custom-swiper-next absolute top-1/2 -translate-y-1/2 -right-12 z-10">
        <ChevronRight size={32} className="text-gray-700 hover:text-gray-900" />
      </button>

      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev'
        }}
        autoHeight={false}
      >
        {posts.map((post) => (
          <SwiperSlide 
            key={post.id} 
          >
            <div className="py-2 w-full">
              <PostItem post={post} className="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .custom-swiper-next.swiper-button-disabled,
        .custom-swiper-prev.swiper-button-disabled {
          opacity: 0.35;
          cursor: auto;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}