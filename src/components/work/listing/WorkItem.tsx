import React from 'react'
import { Images as GalleryIcon } from 'lucide-react'

// Mise à jour des types pour correspondre à la nouvelle structure
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
  title: string
  mainTitle: string
  subtitle: string
  gallery: GalleryImage[]
}

interface WorkItemProps {
  work: Work
  onClick: () => void
}

export const WorkItem: React.FC<WorkItemProps> = ({ work, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden group rounded-lg transition-transform duration-500 hover:scale-[1.02]"
    >
      {/* Image avec zoom au hover - utilisation de mediumLarge pour de meilleures performances */}
      <img
        alt={work.gallery[0].caption || work.title}
        src={work.gallery[0].sizes.mediumLarge.url}
        width={work.gallery[0].sizes.mediumLarge.width}
        height={work.gallery[0].sizes.mediumLarge.height}
        className="w-full h-auto bg-gray-200 rounded-lg transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Overlay avec effet de fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Contenu avec animation de slide */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white text-xl font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {work.mainTitle}
        </h3>
        <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 text-sm">
          {work.subtitle}
        </p>
      </div>

      {/* Badge du nombre d'images avec icône et animation de fade */}
      {work.gallery.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white p-1 rounded text-sm flex items-center gap-1.5 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-[2px] group-hover:-translate-x-[2px]">
          <GalleryIcon size={16} />
        </div>
      )}
    </div>
  )
}