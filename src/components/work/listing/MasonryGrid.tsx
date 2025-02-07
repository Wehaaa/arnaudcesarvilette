'use client'

import React, { useState, useEffect } from 'react'
import { Work } from '@/components/work/types/workItemTypes'
import { WorkItem } from './WorkItem'
import { Gallery } from './Gallery'

const COLUMN_WIDTH = 100
const GAP_SIZE = 16

interface ColumnConfig {
  breakpoint: number
  columns: number
}

interface MasonryGridProps {
  works: Work[]
  onBeforeSlide: (detail: any) => void
}

const columnConfigs: ColumnConfig[] = [
  { breakpoint: 640, columns: 1 },
  { breakpoint: 1024, columns: 2 },
  { breakpoint: Infinity, columns: 3 }
]

const getColumnsForWidth = (width: number): number => {
  return columnConfigs.find(config => width < config.breakpoint)?.columns || 3
}

const calculateItemHeight = (work: Work): number => {
  const width = work.gallery?.[0]?.width || 1
  const height = work.gallery?.[0]?.height || 1
  const aspectRatio = height / width
  
  return COLUMN_WIDTH * aspectRatio + GAP_SIZE
}

const distributeWorksToColumns = (works: Work[], columnCount: number) => {
  const columns: Work[][] = Array(columnCount).fill(null).map(() => [])
  const columnHeights = Array(columnCount).fill(0)
  
  works.forEach((work) => {
    const estimatedHeight = calculateItemHeight(work)
    const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))
    
    columns[shortestColumnIndex].push(work)
    columnHeights[shortestColumnIndex] += estimatedHeight
  })
  
  return columns
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ works, onBeforeSlide }) => {
  const [columns, setColumns] = useState(3)
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null)
  
  useEffect(() => {
    const handleResize = () => setColumns(getColumnsForWidth(window.innerWidth))
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const gridItems = distributeWorksToColumns(works, columns)

  return (
    <>
      <div className="flex gap-8">
        {gridItems.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col gap-8">
            {column.map((work) => (
              <WorkItem
                key={work.databaseId}
                work={work}
                onClick={() => setSelectedWorkIndex(works.findIndex(w => w.databaseId === work.databaseId))}
              />
            ))}
          </div>
        ))}
      </div>

      <Gallery 
        works={works}
        selectedIndex={selectedWorkIndex}
        onClose={() => setSelectedWorkIndex(null)}
      />
    </>
  )
}