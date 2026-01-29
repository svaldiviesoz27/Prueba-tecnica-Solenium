import { useState, useEffect } from 'react'

const STORAGE_KEY = 'rick-morty-dark-mode'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved !== null) {
      return saved === 'true'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(isDark))
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggle = () => setIsDark((prev) => !prev)

  return { isDark, toggle }
}
