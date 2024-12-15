import React from 'react';
import styles from './NavigationButton.module.scss';

interface NavigationButtonProps {
  direction: 'previous' | 'next';
  onClick?: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  direction,
  onClick,
}) => {
  return (
    <button
      className={styles.navButton}
      onClick={onClick}
      aria-label={direction === 'previous' ? 'Previous page' : 'Next page'}
    >
      <img
        loading="lazy"
        src={`/images/icons/${direction}.svg`}
        className={styles.icon}
        alt=""
      />
      <span>{direction === 'previous' ? 'Previous' : 'Next'}</span>
    </button>
  );
};

export default NavigationButton;
