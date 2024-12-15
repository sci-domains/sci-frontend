import ContractList from '@/components/ContractList/ContractList';
import DomainFilters from '@/components/DomainFilters/DomainFilters';
import { DomainInfo } from '@/components/DomainInfo/DomainInfo';
import InfoAlert from '@/components/InfoAlert/InfoAlert';
import Pagination, {
  PaginationState,
} from '@/components/Pagination/Pagination';
import React, { useCallback, useState } from 'react';
import styles from './DomainDetailSection.module.scss';

export const DomainDetailSection: React.FC = () => {
  const [paginationState, setPaginationState] = useState<PaginationState>({
    currentPage: 2,
    pageSize: 30,
    totalResults: 200,
  });

  const handlePageChange = useCallback((newPage: number) => {
    setPaginationState((prev) => ({
      ...prev,
      currentPage: newPage,
    }));
  }, []);

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
      <div className={styles.contractsContainer}>
        <ContractList />
        <Pagination
          currentPage={paginationState.currentPage}
          pageSize={paginationState.pageSize}
          totalResults={paginationState.totalResults}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
