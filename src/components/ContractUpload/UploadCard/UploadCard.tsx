import React from 'react';
import styles from '../ContractUpload.module.scss';

interface UploadCardProps {
  title: string;
  isActive: boolean;
  children: React.ReactNode;
}

export const UploadCard: React.FC<UploadCardProps> = ({
  title,
  isActive,
  children,
}) => {
  return (
    <div className={`${styles.uploadCard} ${isActive ? styles.active : ''}`}>
      <div className={styles.radioButton}>
        <div
          className={`${styles.radioCircle} ${isActive ? styles.active : ''}`}
        >
          {isActive && <div className={styles.radioInner} />}
        </div>
      </div>
      <div className={styles.uploadTitle}>{title}</div>
      {children}
    </div>
  );
};
