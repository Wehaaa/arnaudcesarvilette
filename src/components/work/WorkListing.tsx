import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { queryWorks } from '@/components/work/queries/queryWorks'
import { queryWorkCategory } from '@/components/work/queries/queryWorkCategory'
import ClientWorkListing from '@/components/work/listing/ClientWorkListing'

const WORKS_PER_PAGE = 12

interface WorkListingProps {
  category: string
}

export default async function WorkListing({ category }: WorkListingProps) {
  // Récupération des données en une seule fonction
  const worksData = await fetchGraphQL(queryWorks, {
    first: WORKS_PER_PAGE,
    after: null,
    category
  })

  console.log( worksData )

  // Récupération des données de la catégorie dans la même fonction
  const categoryData = await fetchGraphQL(queryWorkCategory, {
    category: category
  })

  const processedData = {
    works: worksData?.works?.nodes ?? [],
    pageInfo: worksData?.works?.pageInfo ?? { hasNextPage: false, endCursor: null }
  }

  return (
    <div className="px-5 my-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-6 w-2/3">
          <h1 className="text-2xl font-bold">{categoryData.workCategory.name}</h1>
          <p className="text-gray-700 leading-relaxed">{categoryData.workCategory.description}</p>
        </div>
        <ClientWorkListing 
          initialWorks={processedData.works}
          initialPageInfo={processedData.pageInfo}
          category={category}
        />
      </div>
    </div>
  )
}