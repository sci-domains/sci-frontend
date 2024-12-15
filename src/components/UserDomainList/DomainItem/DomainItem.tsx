import { DomainItemType } from '@/types/domainItem';
import React from 'react';
import styles from './DomainItem.module.scss';

interface DomainItemProps {
  item: DomainItemType;
  onManage: (domain: string) => void;
}

export const DomainItem: React.FC<DomainItemProps> = ({ item, onManage }) => {
  return (
    <div className={styles.itemRow}>
      <div className={styles.itemContent}>
        <div className={styles.domain}>{item.domain}</div>
        <div className={styles.date}>{item.registrationDate}</div>
      </div>
      <button
        className={styles.manageButton}
        onClick={() => onManage(item.domain)}
        aria-label={`Manage domain ${item.domain}`}
      >
        Manage domain
      </button>
    </div>
  );
};
