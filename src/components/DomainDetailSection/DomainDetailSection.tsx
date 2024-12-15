import ContractList from '@/components/ContractList/ContractList';
import DomainFilters from '@/components/DomainFilters/DomainFilters';
import { DomainInfo } from '@/components/DomainInfo/DomainInfo';
import InfoAlert from '@/components/InfoAlert/InfoAlert';
import Pagination from '@/components/Pagination/Pagination';
import React from 'react';
import styles from './DomainDetailSection.module.scss';

export const DomainDetailSection: React.FC = () => {
  return (
    <section className={styles.domainDetailSection}>
      <InfoAlert
        message="This is a mock message"
        buttonLabel="Click Me"
        onButtonClick={() => alert('Button clicked')}
      />
      <DomainInfo
        domainName={'test.com'}
        owner={'John Doe'}
        verifier={'Jane Smith'}
        domainRegistrationDate={'2023-01-01'}
        verifierRegistrationDate={'2023-01-02'}
        onReportDomain={() => console.log('Report domain clicked')}
      />
      <DomainFilters />
      <ContractList />
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
