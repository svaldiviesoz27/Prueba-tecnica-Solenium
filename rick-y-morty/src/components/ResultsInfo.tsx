interface ResultsInfoProps {
    total: number
    currentPage: number
    totalPages: number
    resultsPerPage: number
}

export const ResultsInfo = ({ total, currentPage, totalPages, resultsPerPage }: ResultsInfoProps) => {
    const start = (currentPage - 1) * resultsPerPage + 1
    const end = Math.min(currentPage * resultsPerPage, total)

    return (
        <div className="results-info">
            <p className="results-info__text">
                Showing <strong>{start}</strong> - <strong>{end}</strong> of{' '}
                <strong>{total}</strong> characters
            </p>
            <p className="results-info__pages">
                Page {currentPage} of {totalPages}
            </p>
        </div>
    )
}
