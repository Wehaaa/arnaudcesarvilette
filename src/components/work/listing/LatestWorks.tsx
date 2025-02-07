// WorkSection.tsx
'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { GET_WORKS } from '@/queries/work'
import WorkSwiper from './WorkSwiper'
import WorkSwiperLoading from '@/components/work/loading/LoadingWorkSwiper'
import { Work } from '@/types/work'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

interface WorksResponse {
  works: {
    nodes: Work[]
    pageInfo: {
      hasNextPage: boolean
      endCursor: string
    }
  }
}

export default function LatestWorks() {
  const { data, status } = useQuery<WorksResponse>({
    queryKey: ['recent-works'],
    queryFn: async () => {
      return fetchGraphQL(GET_WORKS, {
        first: 6,
        after: null,
      })
    }
  })

  return (
    <section className="px-5">
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold">Les dernières actus</h2>
          <Link href="/actualites" className="flex items-center gap-2 text-gray-600 text-[15px]">
            Voir toutes les actus
            <ArrowRightIcon size="18" />
          </Link>
        </div>
        {status === 'pending' ? (
          <WorkSwiperLoading />
        ) : status === 'success' && (
          <WorkSwiper works={data.works.nodes} />
        )}
      </div>
    </section>
  )
}