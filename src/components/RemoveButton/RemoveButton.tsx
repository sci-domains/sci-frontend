import React from 'react';
import styles from './RemoveButton.module.scss';

interface RemoveButtonProps {
  onClick: () => void;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.removeButton} onClick={onClick}>
      <img
        src="/images/icons/remove.svg"
        alt="Remove"
        className={styles.actionIcon}
        loading="lazy"
      />
    </button>
  );
};
