import React from 'react';
import styles from './PaginationButton.module.scss';

interface PaginationButtonProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  active,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ''}`}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
