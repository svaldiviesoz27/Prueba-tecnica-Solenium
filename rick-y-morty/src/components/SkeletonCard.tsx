export const SkeletonCard = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-card__image" />
            <div className="skeleton-card__content">
                <div className="skeleton-card__title" />
                <div className="skeleton-card__info" />
            </div>
        </div>
    )
}

export const SkeletonGrid = () => {
    return (
        <div className="character-grid">
            {Array.from({ length: 20 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    )
}
