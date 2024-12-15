import { cn } from '@/lib/utils';
import React from 'react';
import styles from './InfoAlert.module.scss';

export type AlertVariant = 'caution' | 'error';

export interface InfoAlertProps {
  variant?: AlertVariant;
  message: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const InfoAlert: React.FC<InfoAlertProps> = ({
  variant = 'caution',
  message,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div
      className={cn(styles.alertContainer, styles[variant])}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.messageWrapper}>
        <img
          loading="lazy"
          src={
            variant === 'caution'
              ? '/images/icons/alert-caution.svg'
              : '/images/icons/alert-error.svg'
          }
          className={styles.alertIcon}
          alt={`${variant} icon`}
          aria-hidden="true"
        />
        <div className={styles.alertMessage}>{message}</div>
      </div>
      <button
        className={styles.actionButton}
        onClick={onButtonClick}
        type="button"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default InfoAlert;
