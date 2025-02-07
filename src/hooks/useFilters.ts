'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useCallback } from 'react'

interface FilterConfig {
  [key: string]: {
    multiSelect?: boolean
    defaultValue?: string
  }
}

export const useFilters = (config: FilterConfig) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // N'exécuter qu'une seule fois au montage du composant
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams)
    let hasChanges = false

    Object.entries(config).forEach(([key, options]) => {
      if (options.defaultValue && !searchParams.has(key)) {
        newSearchParams.set(key, options.defaultValue)
        hasChanges = true
      }
    })

    if (hasChanges) {
      router.replace(`${pathname}?${newSearchParams.toString()}`)
    }
  }, [searchParams, router, pathname, config])

  const updateFilters = useCallback((type: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams)
    const currentValues = newSearchParams.getAll(type)
    const currentValue = newSearchParams.get(type)
    
    // Éviter les mises à jour inutiles
    if (value === currentValue) {
      return
    }
    
    if (config[type]?.multiSelect) {
      if (currentValues.includes(value)) {
        const filteredValues = currentValues.filter(v => v !== value)
        newSearchParams.delete(type)
        filteredValues.forEach(v => newSearchParams.append(type, v))
      } else {
        newSearchParams.append(type, value)
      }
    } else {
      newSearchParams.delete(type)
      if (value) newSearchParams.set(type, value)
    }
    
    router.replace(`${pathname}?${newSearchParams.toString()}`)
  }, [searchParams, router, pathname, config])

  return {
    searchParams,
    updateFilters
  }
}