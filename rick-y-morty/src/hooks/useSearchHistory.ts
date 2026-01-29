import { useState, useEffect } from 'react'

const STORAGE_KEY = 'rick-morty-search-history'
const MAX_ITEMS = 3

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setHistory(JSON.parse(saved))
      } catch {
        setHistory([])
      }
    }
  }, [])

  const addToHistory = (term: string) => {
    const trimmed = term.trim()
    if (!trimmed) return

    setHistory((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase())
      const updated = [trimmed, ...filtered].slice(0, MAX_ITEMS)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem(STORAGE_KEY)
  }

  return { history, addToHistory, clearHistory }
}
