import React from 'react';
import NavigationButton from './NavigationButton/NavigationButton';
import styles from './Pagination.module.scss';
import PaginationButton from './PaginationButton/PaginationButton';

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalResults: number;
}

interface PaginationProps {
  currentPage: number;
  totalResults: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalResults,
  pageSize,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / pageSize);
  const startIndex = currentPage * pageSize;
  const resultsShown = Math.min(totalResults, startIndex);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      <NavigationButton
        direction="previous"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
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
        disabled={isLastPage}
      />

      <div className={styles.results} aria-live="polite">
        Showing {resultsShown} of {totalResults} results
      </div>
    </nav>
  );
};

export default Pagination;
