'use client';
import DomainInput from '@/components/DomainSearchSection/DomainInput/DomainInput';
import React from 'react';
import styles from './DomainSearchSection.module.scss';

export const DomainSearchSection: React.FC = () => {
  return (
    <section className={styles.domainSection}>
      <h3 className={styles.search}>Search Domain</h3>
      <DomainInput />
    </section>
  );
};
