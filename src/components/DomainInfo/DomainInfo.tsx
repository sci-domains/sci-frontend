'use client';
import React from 'react';
import styles from './DomainInfo.module.scss';
import { InfoBlock } from './InfoBlock/InfoBlock';

interface DomainInfoProps {
  domainName: string;
  owner: string;
  verifier: string;
  domainRegistrationDate: string;
  verifierRegistrationDate: string;
  onReportDomain: () => void;
}

export const DomainInfo: React.FC<DomainInfoProps> = ({
  domainName,
  owner,
  verifier,
  domainRegistrationDate,
  verifierRegistrationDate,
  onReportDomain,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.domainName}>{domainName}</h1>
        <button
          className={styles.reportButton}
          onClick={onReportDomain}
          aria-label="Report domain"
        >
          Report domain
        </button>
      </div>
      <div
        className={styles.infoContainer}
        role="region"
        aria-label="Domain information"
      >
        <InfoBlock label="Owner" value={owner} />
        <InfoBlock label="Verifier" value={verifier} />
        <InfoBlock
          label="Domain registration date"
          value={domainRegistrationDate}
        />
        <InfoBlock
          label="Verifier registration date"
          value={verifierRegistrationDate}
        />
      </div>
    </div>
  );
};
