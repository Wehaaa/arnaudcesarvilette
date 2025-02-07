import { Skeleton } from "@/components/ui/skeleton";

const SkeletonParagraph = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-11/12 mb-24" />
      <Skeleton className="h-4 w-4/5 mt-12" />            
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/3" />
    </div>
  );
}

export default SkeletonParagraph;