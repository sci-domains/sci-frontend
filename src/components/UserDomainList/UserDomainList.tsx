import { DomainItemType } from '@/types/domainItem';
import React from 'react';
import { DomainItem } from './DomainItem/DomainItem';
import styles from './UserDomainList.module.scss';

const domains: DomainItemType[] = [
  {
    domain: 'thirddomain.xyz',
    registrationDate: '12 Oct 2024, 9:00AM',
  },
  {
    domain: 'seconddomain.xyz',
    registrationDate: '10 Oct 2024, 9:00AM',
  },
  {
    domain: 'domain.xyz',
    registrationDate: '11 Oct 2024, 9:00AM',
  },
];

export const UserDomainList: React.FC = () => {
  const handleManageDomain = (domain: string) => {
    // Handle domain management
  };

  return (
    <div className={styles.container} role="region" aria-label="Domain List">
      <div className={styles.header}>
        <div className={styles.headerDomain}>
          <span>Domain</span>
          <button
            onClick={() => {
              /* Add logic to order the domains */
            }}
            className={styles.sortButton}
          >
            <img src="/images/icons/drop-down.svg" alt="" loading="lazy" />
          </button>
        </div>
        <div>Registration date</div>
      </div>
      {domains.map((domain, index) => (
        <React.Fragment key={domain.domain}>
          <div className={styles.divider} role="separator" />
          <DomainItem item={domain} onManage={handleManageDomain} />
        </React.Fragment>
      ))}
    </div>
  );
};
