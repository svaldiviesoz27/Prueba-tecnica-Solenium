import type { FormEvent } from 'react'
import { SearchIcon, XIcon } from '../Icons/Icons'

interface SearchBarProps {
    value: string
    onChange: (value: string) => void
    onSearch: () => void
    onClear?: () => void
    isLoading?: boolean
}

export const SearchBar = ({ value, onChange, onSearch, onClear, isLoading }: SearchBarProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSearch()
    }

    const handleClear = () => {
        onChange('')
        if (onClear) {
            onClear()
        }
    }

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <label className="search-bar__label" htmlFor="search">
                <SearchIcon size={18} className="search-bar__icon" />
                Search Character
            </label>
            <div className="search-bar__controls">
                <input
                    id="search"
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder="e.g. Rick Sanchez"
                />
                {value && (
                    <button
                        type="button"
                        className="search-bar__clear-btn"
                        onClick={handleClear}
                        aria-label="Clear search"
                    >
                        <XIcon size={18} />
                    </button>
                )}
                <button type="submit" disabled={isLoading} className="search-bar__submit">
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </div>
        </form>
    )
}
