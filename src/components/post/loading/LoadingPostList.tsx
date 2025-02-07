import { Skeleton } from "@/components/ui/skeleton"

const LoadingPostGrid = ({ itemCount = 9 }) => {
  return (
    <>
      {Array.from({ length: itemCount }).map((_, index) => (
        <div key={index} className="group block overflow-hidden bg-white">
          <article className="relative flex flex-col">
            {/* Image skeleton */}
            <div className="relative h-48 w-full rounded-lg overflow-hidden md:h-64">
              <Skeleton className="h-full w-full" />
              {/* Category badge skeleton */}
              <div className="absolute left-6 top-6">
                <Skeleton className="h-6 w-20" />
              </div>
            </div>

            {/* Content container */}
            <div className="flex flex-1 flex-col py-6">
              {/* Date skeleton */}
              <Skeleton className="mb-2 h-4 w-24" />

              {/* Title skeleton */}
              <div className="mb-4 space-y-2">
                <Skeleton className="h-7 w-3/4" />
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  )
}

export default LoadingPostGrid;