import Link from "next/link";
import Image from "next/image";

const WorkCategoriesGrid = ({ categories } : {
  categories: {
    id: string,
    name: string,
    slug: string,
    description: string,
    count: number,
    coverImage: {
      url: string,
      width: number,
      height: number,
    },
  }[]
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6">
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={`/portfolio/${category.slug}`}
          className="relative block aspect-[3/4] overflow-hidden rounded-lg"
        >
          <Image 
            src={category.coverImage.url}
            alt={category.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-radial from-black/0 from-40% to-black/80" />
          <div className="absolute inset-0 flex justify-center items-end p-4 sm:p-6 bg-black/40 transition-all duration-300 hover:bg-black/60">
            <h2 className="text-white text-[calc(9px+2vw)] sm:text-xl font-medium tracking-wide">
              {category.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default WorkCategoriesGrid;