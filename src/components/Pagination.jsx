const Pagination = ({ currentPage, totalResults, pageSize, onPageChange }) => {
    const totalPages = Math.ceil(totalResults / pageSize);

    const handlePageClick = (page) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className="pagination">
            <button
                className="btn"
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
            >
                Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    className={`btn ${currentPage === index + 1 ? 'btn-primary' : ''}`}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button
                className="btn"
                disabled={currentPage === totalPages}
                onClick={() => handlePageClick(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
