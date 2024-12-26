import { Domain } from '@/types/domain';
import React from 'react';
import styles from './DomainItem.module.scss';

interface DomainItemProps {
  domain: Domain;
  onManage: (domain: string) => void;
}

export const DomainItem: React.FC<DomainItemProps> = ({ domain, onManage }) => {
  return (
    <div className={styles.itemRow}>
      <div className={styles.itemContent}>
        <div className={styles.domain}>{domain.name}</div>
        <div className={styles.date}>{domain.registrationDate}</div>
      </div>
      <button
        className={styles.manageButton}
        onClick={() => onManage(domain.name)}
        aria-label={`Manage domain ${domain.name}`}
      >
        Manage domain
      </button>
    </div>
  );
};
