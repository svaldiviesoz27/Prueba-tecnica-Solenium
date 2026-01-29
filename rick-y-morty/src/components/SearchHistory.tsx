import { ClockIcon, XIcon } from './Icons'

interface SearchHistoryProps {
    items: string[]
    onSelect: (value: string) => void
    onClear?: () => void
}

export const SearchHistory = ({ items, onSelect, onClear }: SearchHistoryProps) => {
    if (items.length === 0) {
        return null
    }

    return (
        <section className="history" aria-label="Search history">
            <div className="history__header">
                <h2 className="section-title">
                    <ClockIcon size={18} className="history__icon" />
                    Recent Searches
                </h2>
                {onClear && (
                    <button
                        type="button"
                        className="history__clear"
                        onClick={onClear}
                        aria-label="Clear search history"
                    >
                        <XIcon size={14} />
                        Clear History
                    </button>
                )}
            </div>
            <div className="history__list">
                {items.map((item) => (
                    <button
                        key={item}
                        type="button"
                        className="history__button"
                        onClick={() => onSelect(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </section>
    )
}
