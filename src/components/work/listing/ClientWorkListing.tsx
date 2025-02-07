'use client'

import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { queryWorks } from '@/components/work/queries/queryWorks'
import { Work } from '@/components/work/types/workItemTypes'
import { MasonryGrid } from './MasonryGrid'

const WORKS_PER_PAGE = 12

interface PageInfo {
  hasNextPage: boolean
  endCursor: string | null
}

interface WorkPageData {
  works: Work[]
  pageInfo: PageInfo
}

interface WorkListingProps {
  initialWorks: Work[]
  initialPageInfo: PageInfo
  category: string
}

interface FetchWorkPageProps {
  pageParam?: string | null
  category: string
}

async function fetchWorkPage({ pageParam = null, category }: FetchWorkPageProps): Promise<WorkPageData> {
  const data = await fetchGraphQL(queryWorks, {
    first: WORKS_PER_PAGE,
    after: pageParam,
    category
  })
  
  return {
    works: data?.works?.nodes ?? [],
    pageInfo: data?.works?.pageInfo ?? { hasNextPage: false, endCursor: null }
  }
}

export default function ClientWorkListing({ initialWorks, initialPageInfo, category }: WorkListingProps) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['works', category],
    queryFn: ({ pageParam }) => fetchWorkPage({ pageParam, category }),
    getNextPageParam: (lastPage) => lastPage.pageInfo.hasNextPage ? lastPage.pageInfo.endCursor : undefined,
    initialData: {
      pages: [{
        works: initialWorks,
        pageInfo: initialPageInfo
      }],
      pageParams: [null]
    }
  })

  const allWorks = data?.pages.flatMap(page => page.works) ?? []

  const handleBeforeSlide = (detail: any) => {
    const { index } = detail
    if (hasNextPage && index >= allWorks.length - 3) {
      fetchNextPage()
    }
  }

  if (status === 'error') {
    return <div>Une erreur est survenue lors du chargement des articles...</div>
  }

  return (
    <div>
      <MasonryGrid works={allWorks} onBeforeSlide={handleBeforeSlide} />
      
      {hasNextPage && (
        <Button
          variant="outline"
          onClick={() => fetchNextPage()}
          className="mx-auto block mt-8 px-4 py-2"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Chargement...' : 'Charger plus d\'articles'}
        </Button>
      )}
    </div>
  )
}