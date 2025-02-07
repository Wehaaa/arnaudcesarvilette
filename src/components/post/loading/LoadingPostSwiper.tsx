import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPostSwiper() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="h-[180px] py-2">
          <div className="flex flex-row flex-wrap h-full justify-between items-start w-full p-4 xl:p-6 border rounded-lg">
            <div className="flex-1">
              <Skeleton className="h-6 w-20 mb-3" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center ml-5">
              <Skeleton className="w-20 h-20 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}