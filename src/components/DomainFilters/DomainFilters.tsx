import ChainSelector from '@/components/ChainSelector/ChainSelector';
import SearchBar from '@/components/SearchBar/SearchBar';
import React, { useState } from 'react';
import styles from './DomainFilters.module.scss';

const DomainFilters: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    // TODO add here the logic to filter the domains
  };

  return (
    <section className={styles.container}>
      <div className={styles.actionWrapper}>
        <button
          className={styles.whitelistButton}
          aria-label="Whitelist contracts"
        >
          Whitelist contracts
        </button>
      </div>
      <div className={styles.filterWrapper}>
        <SearchBar
          className={styles.searchBar}
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ChainSelector />
      </div>
    </section>
  );
};

export default DomainFilters;
