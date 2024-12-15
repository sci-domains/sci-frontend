import React from 'react';
import styles from './Checkbox.module.scss';

export type CheckboxState = 'unchecked' | 'checked' | 'indeterminate';

interface CheckboxProps {
  state: CheckboxState;
  disabled?: boolean;
  onChange?: (state: CheckboxState) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  state,
  disabled = false,
  onChange,
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      // Toggle between checked and unchecked states
      onChange(state === 'checked' ? 'unchecked' : 'checked');
    }
  };

  return (
    <div className={styles.checkboxWrapper}>
      <div className={styles.checkboxContainer}>
        <div
          className={`${styles.checkbox} ${styles[state]} ${disabled ? styles.disabled : ''}`}
          role="checkbox"
          aria-checked={state === 'checked'}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={handleClick}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick();
            }
          }}
        >
          {state !== 'unchecked' && (
            <div className={styles.checkmarkContainer}>
              {state === 'checked' ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6666 3.5L5.25 9.91667L2.33333 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <div className={styles.indeterminateMark} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
