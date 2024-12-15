import React from 'react';
import NavigationButton from './NavigationButton/NavigationButton';
import styles from './Pagination.module.scss';
import PaginationButton from './PaginationButton/PaginationButton';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  resultsShown: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  resultsShown,
  totalResults,
  onPageChange,
}) => {
  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <NavigationButton
        direction="previous"
        onClick={() => onPageChange(currentPage - 1)}
      />

      <div className={styles.pageNumbers}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PaginationButton
              key={page}
              active={currentPage === page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationButton>
          ),
        )}
      </div>

      <NavigationButton
        direction="next"
        onClick={() => onPageChange(currentPage + 1)}
      />

      <div className={styles.results} aria-live="polite">
        Showing {resultsShown} of {totalResults} results
      </div>
    </nav>
  );
};

export default Pagination;
