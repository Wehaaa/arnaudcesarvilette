import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingPostSingle() {
  return (
    <article>
      {/* Header Skeleton */}
      <div className="max-w-screen-lg mx-auto mt-8 p-6 md:p-12 py-24 border rounded-2xl border-zinc-200">
        <div className="mx-auto">
          <div className="flex flex-row-reverse">
            {/* Image Skeleton */}
            <div>
              <Skeleton className="w-[200px] h-[200px] rounded-lg" />
            </div>
            <div className="grow">
              <div className="mr-5 lg:mr-6">
                <div>
                  {/* Category Badge Skeleton */}
                  <Skeleton className="w-24 h-6 rounded-full" />
                  
                  {/* Title Skeleton */}
                  <div className="my-6 space-y-4">
                    <Skeleton className="w-3/4 h-8" />
                    <Skeleton className="w-2/3 h-8" />
                  </div>
                  
                  {/* Date Skeleton */}
                  <Skeleton className="w-32 h-4 mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="px-5">
        <div className="container">
          <div className="mt-12">
            <div className="max-w-prose mx-auto space-y-4">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-11/12 h-4" />
              <Skeleton className="w-4/5 h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-3/4 h-4" />
              
              {/* Image placeholder in content */}
              <Skeleton className="w-full h-64 my-8" />
              
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-5/6 h-4" />
              <Skeleton className="w-full h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="mt-12">
        <Skeleton className="w-full h-32" />
      </div>
    </article>
  )
}