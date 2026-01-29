import { useEffect, useState, useCallback, useMemo } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { ErrorMessage } from './components/ErrorMessage'
import { SearchHistory } from './components/SearchHistory'
import { CharacterGrid } from './components/CharacterGrid'
import { CharacterModal } from './components/CharacterModal'
import { Filters } from './components/Filters'
import { Pagination } from './components/Pagination'
import { ResultsInfo } from './components/ResultsInfo'
import { SkeletonGrid } from './components/SkeletonCard'
import { ThemeToggle } from './components/ThemeToggle'
import { useCharacters } from './hooks/useCharacters'
import { useSearchHistory } from './hooks/useSearchHistory'
import { useDarkMode } from './hooks/useDarkMode'
import type { Character } from './types/rickAndMorty'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    status: 'all',
    species: 'all',
    gender: 'all',
    page: 1,
  })
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)

  const { data, isLoading, error, fetchCharacters } = useCharacters()
  const { history, addToHistory, clearHistory } = useSearchHistory()
  const { isDark, toggle: toggleTheme } = useDarkMode()

  // Initial load
  useEffect(() => {
    fetchCharacters({ page: 1 })
  }, [fetchCharacters])

  const buildFilters = useCallback((name?: string, page: number = 1) => ({
    name: name || undefined,
    status: filters.status !== 'all' ? filters.status : undefined,
    species: filters.species !== 'all' ? filters.species : undefined,
    gender: filters.gender !== 'all' ? filters.gender : undefined,
    page,
  }), [filters.status, filters.species, filters.gender])

  const handleSearch = useCallback(() => {
    const trimmed = searchTerm.trim()
    if (!trimmed) return

    addToHistory(trimmed)
    const searchFilters = buildFilters(trimmed, 1)
    fetchCharacters(searchFilters)
    setFilters((prev) => ({ ...prev, page: 1 }))
  }, [searchTerm, addToHistory, fetchCharacters, buildFilters])

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: value, page: 1 }
      
      // Build filters with the NEW values
      const apiFilters = {
        name: searchTerm || undefined,
        status: key === 'status' ? (value !== 'all' ? value : undefined) : (newFilters.status !== 'all' ? newFilters.status : undefined),
        species: key === 'species' ? (value !== 'all' ? value : undefined) : (newFilters.species !== 'all' ? newFilters.species : undefined),
        gender: key === 'gender' ? (value !== 'all' ? value : undefined) : (newFilters.gender !== 'all' ? newFilters.gender : undefined),
        page: 1,
      }
      
      fetchCharacters(apiFilters)
      return newFilters
    })
  }, [searchTerm, fetchCharacters])

  const handleResetFilters = useCallback(() => {
    setFilters({ status: 'all', species: 'all', gender: 'all', page: 1 })
    fetchCharacters({ name: searchTerm || undefined, page: 1 })
  }, [searchTerm, fetchCharacters])

  const handleClearSearch = useCallback(() => {
    setSearchTerm('')
    fetchCharacters({ 
      status: filters.status !== 'all' ? filters.status : undefined,
      species: filters.species !== 'all' ? filters.species : undefined,
      gender: filters.gender !== 'all' ? filters.gender : undefined,
      page: 1 
    })
    setFilters((prev) => ({ ...prev, page: 1 }))
  }, [filters.status, filters.species, filters.gender, fetchCharacters])

  const handlePageChange = useCallback((page: number) => {
    setFilters((prev) => ({ ...prev, page }))
    fetchCharacters(buildFilters(searchTerm || undefined, page))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchTerm, fetchCharacters, buildFilters])

  const handleSelectHistory = useCallback((name: string) => {
    setSearchTerm(name)
    fetchCharacters(buildFilters(name, 1))
    setFilters((prev) => ({ ...prev, page: 1 }))
  }, [fetchCharacters, buildFilters])

  const noResults = useMemo(
    () => !isLoading && !error && data !== null && data.results.length === 0,
    [isLoading, error, data]
  )

  const showResults = useMemo(
    () => !isLoading && !error && data !== null && data.results.length > 0,
    [isLoading, error, data]
  )

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" 
            alt="Rick and Morty Logo" 
            className="app__logo"
          />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
        <p>Explore the Rick & Morty universe</p>
      </header>

      <main className="app__content">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
          onClear={handleClearSearch}
          isLoading={isLoading}
        />

        <Filters
          status={filters.status}
          species={filters.species}
          gender={filters.gender}
          onStatusChange={(value) => handleFilterChange('status', value)}
          onSpeciesChange={(value) => handleFilterChange('species', value)}
          onGenderChange={(value) => handleFilterChange('gender', value)}
          onReset={handleResetFilters}
        />

        {history.length > 0 && (
          <SearchHistory 
            items={history} 
            onSelect={handleSelectHistory}
            onClear={clearHistory}
          />
        )}

        {isLoading && <SkeletonGrid />}
        
        {error && <ErrorMessage message={error} />}

        {noResults && (
          <div className="empty-state" role="status">
            No se encontraron resultados con esos criterios.
          </div>
        )}

        {showResults && data && (
          <>
            <ResultsInfo
              total={data.info.count}
              currentPage={filters.page}
              totalPages={data.info.pages}
              resultsPerPage={20}
            />
            <CharacterGrid
              characters={data.results}
              onSelectCharacter={setSelectedCharacter}
            />
            {data.info.pages > 1 && (
              <Pagination
                currentPage={filters.page}
                totalPages={data.info.pages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </main>

      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  )
}

export default App
