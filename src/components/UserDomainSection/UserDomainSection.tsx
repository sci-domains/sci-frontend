import ContractUpload from '@/components/ContractUpload/ContractUpload';
import Pagination from '@/components/Pagination/Pagination';
import SearchBar from '@/components/SearchBar/SearchBar';
import { UserDomainList } from '@/components/UserDomainList/UserDomainList';
import React, { useState } from 'react';
import styles from './UserDomainSection.module.scss';

export const UserDomainSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    // TODO add here the logic to filter the domains
  };

  return (
    <section className={styles.domainDetailSection}>
      <SearchBar
        placeholder={'Search for a domain'}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <UserDomainList />
      <ContractUpload />
      <Pagination
        currentPage={1}
        totalPages={10}
        resultsShown={20}
        totalResults={200}
        onPageChange={(page) => console.log(`Page changed to: ${page}`)}
      />
    </section>
  );
};
