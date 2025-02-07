// Fichier : components/post/listing/LoadMoreButton.tsx
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function LoadMoreButton({ endCursor }: { endCursor: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    const current = new URLSearchParams(searchParams.toString())
    current.set('cursor', endCursor)
    router.push(`?${current.toString()}`)
    setIsLoading(false)
  }

  return (
    <Button
      variant="outline"
      onClick={handleLoadMore}
      className="mx-auto block px-4 py-2"
      disabled={isLoading}
    >
      {isLoading ? 'Chargement...' : 'Charger plus d\'articles'}
    </Button>
  )
}