import { Skeleton } from "@/components/ui/skeleton"

const LoadingWorkGrid = ({ itemCount = 9 }) => {
  // On utilise un nombre fixe de lignes pour l'extrait
  const generateExcerptLines = () => {
    return (
      <>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </>
    );
  };

  return (
    <>
      {Array.from({ length: itemCount }).map((_, index) => (
        <div key={index} className="inline-block w-full p-4 xl:p-6 border rounded-lg mb-5">
          {/* Category Badge Skeleton */}
          <div className="mb-4">
            <Skeleton className="h-6 w-20" />
          </div>

          {/* Title Skeleton */}
          <div className="mb-4 space-y-2">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-7 w-1/2" />
          </div>

          {/* Excerpt Skeleton - nombre fixe de lignes */}
          <div className="space-y-2 mb-4">
            {generateExcerptLines()}
          </div>

          {/* Metadata Skeleton */}
          <div className="flex items-center space-x-4">
            {/* Date */}
            <Skeleton className="h-4 w-24" />
            
            {/* Comments count */}
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      ))}
    </>
  )
}

export default LoadingWorkGrid;