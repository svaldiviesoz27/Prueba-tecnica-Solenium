import { useState, useCallback } from 'react'
import { searchCharacters, type SearchFilters } from '../services/rickAndMortyApi'
import type { CharactersResponse } from '../types/rickAndMorty'

export const useCharacters = () => {
  const [data, setData] = useState<CharactersResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const fetchCharacters = useCallback(async (filters: SearchFilters) => {
    setIsLoading(true)
    setError('')

    try {
      const response = await searchCharacters(filters)
      setData(response)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
      setError(errorMessage)
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    data,
    isLoading,
    error,
    fetchCharacters,
  }
}
