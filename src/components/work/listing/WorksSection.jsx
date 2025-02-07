'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { queryWorkCategories } from '@/components/work/queries/queryWorkCategories'
import WorkCategoriesGrid from '@/components/work/categories/WorkCategoriesGrid'
import WorkCategoriesGridSkeleton from '../loading/WorkCategoriesGridSkeleton'


export default function WorksSection() {
  const { data, status } = useQuery({
    queryKey: ['work-categories'],
    queryFn: async () => {
      return fetchGraphQL(queryWorkCategories)
    }
  })

  const workCategories = data?.workCategories?.nodes ?? []

  return (
    <>
      {status === 'pending' ? (
        <WorkCategoriesGridSkeleton />
      ) : status === 'success' && (
        <WorkCategoriesGrid categories={workCategories} />
      )}
    </>
  )
}