interface SearchHistoryProps {
    items: string[]
    onSelect: (value: string) => void
}

export const SearchHistory = ({ items, onSelect }: SearchHistoryProps) => {
    if (items.length === 0) {
        return null
    }

    return (
        <section className="history" aria-label="Historial de búsquedas">
            <h2 className="section-title">Últimas búsquedas</h2>
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
