import React from 'react';
import styles from './SortButton.module.scss';

export type SortDirection = 'asc' | 'desc' | 'none';

interface SortButtonProps {
  direction: SortDirection;
  onClick: () => void;
  label?: string;
}

export const SortButton: React.FC<SortButtonProps> = ({
                                                        direction,
                                                        onClick,
                                                        label
                                                      }) => {
  return (
    <button
      onClick={onClick}
      className={styles.sortButton}
      aria-label={`Sort ${direction === 'none' ? '' : direction === 'asc' ? 'descending' : 'ascending'}`}
      title={`Sort ${direction === 'none' ? '' : direction === 'asc' ? 'descending' : 'ascending'}`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <div className={`${styles.iconWrapper} ${styles[direction]}`}>
        <img
          src="/images/icons/drop-down.svg"
          alt="Sort"
          loading="lazy"
          className={styles.icon}
        />
      </div>
    </button>
  );
};