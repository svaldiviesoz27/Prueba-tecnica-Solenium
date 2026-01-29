import './Loader.css'

export const Loader = () => {
    return (
        <div className="loader" aria-live="polite">
            <span className="loader__spinner" />
            <span className="loader__text">Loading...</span>
        </div>
    )
}
