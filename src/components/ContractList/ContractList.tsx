import { Checkbox, CheckboxState } from '@/components/Checkbox/Checkbox';
import { SortButton, SortDirection } from '@/components/SortButton/SortButton';
import React, { useState } from 'react';
import styles from './ContractList.module.scss';
import { ContractRow } from './ContractRow';
interface Contract {
  address: string;
  chainIcons: string[];
  isDomainOwner?: boolean;
}

interface SortState {
  field: keyof Contract | null;
  direction: SortDirection;
}

export const ContractList: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([
    {
      address: '0x7637271211d3b4c542e93bceeaadd5f45c3e2cd0',
      chainIcons: ['/images/icons/chains/polygon.svg'],
      isDomainOwner: true,
    },
    {
      address: '0x7637471211d3b4c542e93bceeaadd5f45c3e2cd0',
      chainIcons: ['/images/icons/chains/polygon.svg'],
      isDomainOwner: true,
    },
  ]);

  const [sortState, setSortState] = useState<SortDirection>('asc');
  const [selectedContracts, setSelectedContracts] = useState<Set<string>>(
    new Set(),
  );

  const getHeaderCheckboxState = (): CheckboxState => {
    const selectedCount = selectedContracts.size;
    const totalSelectableCount = contracts.length;

    if (selectedCount === 0) return 'unchecked';
    if (selectedCount === totalSelectableCount) return 'checked';
    return 'indeterminate';
  };

  const handleHeaderCheckboxChange = (state: CheckboxState) => {
    if (state === 'checked') {
      const newSelected = new Set(
        contracts
          .filter((contract) => contract.isDomainOwner)
          .map((contract) => contract.address),
      );
      setSelectedContracts(newSelected);
    } else {
      setSelectedContracts(new Set());
    }
  };

  const handleContractCheckboxChange = (
    address: string,
    state: CheckboxState,
  ) => {
    const newSelected = new Set(selectedContracts);
    if (state === 'checked') {
      newSelected.add(address);
    } else {
      newSelected.delete(address);
    }
    setSelectedContracts(newSelected);
  };

  const handleContractRemove = (address: string) => {
    setContracts(contracts.filter((contract) => contract.address !== address));
    setSelectedContracts((current) => {
      const newSelected = new Set(current);
      newSelected.delete(address);
      return newSelected;
    });
  };

  const toggleSort = () => {
    setSortState(sortState === 'asc' ? 'desc' : 'asc');
    // TODO Handle sort
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.addressColumn}>
          <Checkbox
            state={getHeaderCheckboxState()}
            onChange={handleHeaderCheckboxChange}
          />
          <div className={styles.columnHeader}>
            <SortButton
              direction={sortState}
              onClick={() => toggleSort()}
              label="Contract address"
            />
          </div>
        </div>
        <div className={styles.chainColumn}>Chain</div>
      </div>

      {contracts.map((contract) => (
        <ContractRow
          key={contract.address}
          {...contract}
          checkboxState={
            selectedContracts.has(contract.address) ? 'checked' : 'unchecked'
          }
          onCheckboxChange={(state) =>
            handleContractCheckboxChange(contract.address, state)
          }
          onRemove={() => handleContractRemove(contract.address)}
          isDomainOwner={true}
        />
      ))}
    </div>
  );
};

export default ContractList;
