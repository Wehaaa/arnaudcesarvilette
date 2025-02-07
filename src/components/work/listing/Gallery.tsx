'use client'

import React, { useEffect, useRef } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCreative, EffectFade } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-creative'

// Mise à jour des types pour la nouvelle structure
interface ImageSize {
  url: string
  width: number
  height: number
}

interface GalleryImage {
  id: number
  caption: string
  sizes: {
    full: ImageSize
    mediumLarge: ImageSize
  }
}

interface Work {
  databaseId: number
  title: string
  mainTitle: string
  subtitle: string
  gallery: GalleryImage[]
}

interface GalleryProps {
  works: Work[]
  selectedIndex: number | null
  onClose: () => void
}

const CustomNavButton = ({ direction, onClick, className }: { direction: 'prev' | 'next', onClick: () => void, className?: string }) => (
  <button
    onClick={onClick}
    className={`hover:bg-white/20 rounded-full p-2 transition-all cursor-pointer ${
      direction === 'prev' ? 'left-4' : 'right-4'
    } ${className}`}
  >
    {direction === 'prev' ? <ChevronLeft className="w-5 h-5 text-white" /> : <ChevronRight className="w-5 h-5 text-white" />}
  </button>
)

export const Gallery: React.FC<GalleryProps> = ({ works, selectedIndex, onClose }) => {
  const swiperRef = useRef<SwiperType>()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!swiperRef.current) return

      switch (e.key) {
        case 'ArrowRight':
          swiperRef.current.slideNext()
          break
        case 'ArrowLeft':
          swiperRef.current.slidePrev()
          break
        case 'Escape':
          onClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (selectedIndex === null) return null

  const imageWrapperClass = 'px-[var(--gallery-padding-x)] py-[var(--gallery-padding-y)] h-[100vh]! w-[100vw]! flex! justify-center items-center'
  const imageClass = 'h-full max-h-full object-contain'

  const renderSlideContent = (work: Work, image: GalleryImage) => (
    <div className={imageWrapperClass}>
      <img 
        src={image.sizes.full.url}
        alt={image.caption || work.title}
        width={image.sizes.full.width}
        height={image.sizes.full.height}
        className={imageClass}
      />
    </div>
  )

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <div className="
        fixed inset-0 z-50 
        bg-black/100 
        flex items-center justify-center 
        animate-in fade-in duration-200 
        [--gallery-padding-x:32px] md:[--gallery-padding-x:64px] 
        [--gallery-padding-y:64px]
        ">
        <div className="w-full h-screen scale-100 animate-in zoom-in-95 duration-200">
          <Swiper
            modules={[Navigation, Pagination, EffectCreative]}
            navigation
            pagination={false}
            initialSlide={selectedIndex}
            effect="creative"
            creativeEffect={{
              prev: {
                translate: ['-80%', 0, -1],
                opacity: 0
              },
              next: {
                translate: ['80%', 0, 0],
                opacity: 0
              },
            }}
            speed={500}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            className="
              w-full 
              [--swiper-theme-color:#fff] 
              [--swiper-navigation-size:20px] md:[--swiper-navigation-size:36px] 
              [--swiper-pagination-bullet-inactive-color:#979797] 
              [--swiper-pagination-bottom:13px]"
          >
            {works.map((work) => (
              <SwiperSlide key={work.databaseId}>
                {work.gallery.length === 1 ? (
                  renderSlideContent(work, work.gallery[0])
                ) : (
                  <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    navigation={{
                      prevEl: '.mini-swiper-prev',
                      nextEl: '.mini-swiper-next',
                    }}
                    pagination={{ 
                      type: 'fraction',
                      clickable: true,
                      el: '.pagination-fraction'
                    }}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={400}
                    nested={true}
                    allowTouchMove={false}
                    className="w-full relative"
                  >
                    <div className="absolute z-10 w-full bottom-0 flex justify-center items-center h-[var(--gallery-padding-y)]">
                      <div className="flex w-36 items-center bg-white/10 border border-white/5 p-0.5 rounded-full backdrop-blur-sm">
                        <CustomNavButton direction="prev" onClick={() => {}} className="mini-swiper-prev" />
                        <div className="pagination-fraction text-sm text-center text-white [--swiper-pagination-fraction-color:#fff]" />
                        <CustomNavButton direction="next" onClick={() => {}} className="mini-swiper-next" />
                      </div>
                    </div>
                    <div className="absolute top-0 w-full text-center text-white z-10 h-[var(--gallery-padding-y)] flex flex-col justify-center">
                      <p className="text-white text-base font-bold leading-tight">{work.mainTitle}</p>
                      <p className="text-white text-sm opacity-80">{work.subtitle}</p>
                    </div>
                    
                    {work.gallery.map((image, imageIndex) => (
                      <SwiperSlide key={image.id || imageIndex}>
                        {renderSlideContent(work, image)}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white z-50 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    </Dialog>
  )
}