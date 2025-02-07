'use client'

import { useQuery } from '@tanstack/react-query'
import { fetchGraphQL } from '@/utils/fetchGraphQL'
import { queryWorkCategories } from '@/components/work/queries/queryWorkCategories'
import WorkCategoriesGrid from '@/components/work/categories/WorkCategoriesGrid'
import CallToAction from '../globals/CallToAction'
import WorksSection from '@/components/work/listing/WorksSection'



export default function WorkCategoriesListing() {
  
  return (
    <div className="max-w-6xl mx-auto my-8 space-y-8">
      <h1 className="text-2xl font-bold">Mes photos</h1>
      <WorksSection />
      <div className="mt-12">
        <CallToAction />
      </div>
    </div>
  )
}