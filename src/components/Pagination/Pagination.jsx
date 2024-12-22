import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>

      {[...Array(totalPages)].map((_, i) => (
            <button
              className={` ${currentPage === i+1  ? styles.active : ""
              }`}
              key={i}
              onClick={() => onPageChange(i + 1)}
              title={`${i+1} page of ${totalPages}`}
            >
              {i+1}
            </button>
          ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  )
}

export default Pagination;
