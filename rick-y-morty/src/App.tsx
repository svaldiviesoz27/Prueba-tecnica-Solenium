import { useEffect, useState } from 'react'
import './App.css'
import { SearchBar } from './components/searchBar'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/ErrorMessage'
import { SearchHistory } from './components/SearchHistory'
import { CharacterCard } from './components/CharacterCard'
import { ApiError, fetchCharacterByName } from './services/rickAndMortyApi'
import type { Character } from './types/rickAndMorty'

const HISTORY_STORAGE_KEY = 'rick-morty-search-history'
const MAX_HISTORY_ITEMS = 3

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [character, setCharacter] = useState<Character | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const savedHistory = localStorage.getItem(HISTORY_STORAGE_KEY)
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history))
  }, [history])

  const updateHistory = (name: string) => {
    const trimmedName = name.trim()
    if (!trimmedName) {
      return
    }

    setHistory((previous) => {
      const filtered = previous.filter(
        (item) => item.toLowerCase() !== trimmedName.toLowerCase()
      )
      return [trimmedName, ...filtered].slice(0, MAX_HISTORY_ITEMS)
    })
  }

  const handleSearchByName = async (name: string) => {
    if (!name.trim()) {
      setErrorMessage('Ingresa un nombre para buscar.')
      return
    }

    setIsLoading(true)
    setErrorMessage('')
    setCharacter(null)

    try {
      const result = await fetchCharacterByName(name)
      setCharacter(result)
      updateHistory(result.name)
    } catch (error) {
      if (error instanceof ApiError) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Ocurrió un error inesperado. Intenta nuevamente.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    void handleSearchByName(searchTerm)
  }

  const handleSelectHistory = (name: string) => {
    setSearchTerm(name)
    void handleSearchByName(name)
  }

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__badge">Rick & Morty</span>
        <h1>Buscador de personajes</h1>
        <p>Encuentra información de tus personajes favoritos.</p>
      </header>

      <main className="app__content">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
          isLoading={isLoading}
        />

        {isLoading && <Loader />}
        {errorMessage && <ErrorMessage message={errorMessage} />}

        {!isLoading && !errorMessage && character && (
          <CharacterCard character={character} />
        )}

        <SearchHistory items={history} onSelect={handleSelectHistory} />
      </main>
    </div>
  )
}

export default App
