import type { FormEvent } from 'react'

interface SearchBarProps {
    value: string
    onChange: (value: string) => void
    onSearch: () => void
    isLoading?: boolean
}

export const SearchBar = ({ value, onChange, onSearch, isLoading }: SearchBarProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSearch()
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <label className="search-bar__label" htmlFor="search">
                Buscar personaje
            </label>
            <div className="search-bar__controls">
                <input
                    id="search"
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder="Ej: Rick Sanchez"
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Buscando...' : 'Buscar'}
                </button>
            </div>
        </form>
    )
}
