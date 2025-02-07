import React from 'react';

const WorkCategoriesGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[...Array(4)].map((_, index) => (
        <div 
          key={index}
          className="relative block aspect-[3/4] overflow-hidden rounded-lg bg-gray-200"
        >
          <div className="absolute inset-0">
            <div className="h-full w-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:400%_100%]" />
          </div>
          <div className="absolute inset-0 flex justify-center items-end p-6">
            <div className="h-8 w-32 rounded animate-pulse bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-[length:400%_100%]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCategoriesGridSkeleton;