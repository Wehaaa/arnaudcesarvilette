import { WorkItem } from "@/components/work/listing/WorkItem";
import LoadingWorkList from "@/components/work/loading/LoadingWorkList";
import { Work } from "@/components/work/types/workItemTypes";

interface WorkListProps {
  works?: Work[];
  isLoading?: boolean;
  appendMode?: boolean;
  className?: string;
}

const WorkList = ({ works = [], isLoading = false, appendMode = false, className = "" }: WorkListProps) => {
  if (isLoading && !appendMode) {
    return <LoadingWorkList />;
  }

  if (!isLoading && !works.length) {
    return (
      <div className="">
        <p className="text-gray-500">Aucun résultat trouvé.</p>
      </div>
    );
  }

  return (
    <>
      {works.map((work) => (
        <WorkItem key={work.databaseId} work={work} className={className} />
      ))}
      {isLoading && appendMode && (
        <LoadingWorkList itemCount={3} />
      )}
    </>
  );
};

export default WorkList;