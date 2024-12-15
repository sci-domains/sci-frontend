import React from 'react';
import styles from './InfoBlock.module.scss';

interface InfoBlockProps {
  label: string;
  value: string;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({ label, value }) => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};
