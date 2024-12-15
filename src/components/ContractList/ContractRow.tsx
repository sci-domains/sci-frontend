import React from 'react';

import { Checkbox, CheckboxState } from '@/components/Checkbox/Checkbox';
import { RemoveButton } from '@/components/RemoveButton/RemoveButton';
import styles from './ContractList.module.scss';

interface ContractRowProps {
  address: string;
  chainIcons: string[];
  isDomainOwner: boolean;
  checkboxState: CheckboxState;
  onCheckboxChange: (state: CheckboxState) => void;
  onRemove: () => void;
}

export const ContractRow: React.FC<ContractRowProps> = ({
  address,
  chainIcons,
  isDomainOwner,
  checkboxState,
  onCheckboxChange,
  onRemove,
}) => {
  return (
    <div className={styles.headerRow}>
      <div className={styles.addressColumn}>
        {isDomainOwner && (
          <Checkbox state={checkboxState} onChange={onCheckboxChange} />
        )}
        <div className={styles.contractAddress}>{address}</div>
      </div>
      <div className={styles.chainIcons}>
        {chainIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="Chain icon"
            className={styles.chainIcon}
            loading="lazy"
          />
        ))}
      </div>
      {isDomainOwner && <RemoveButton onClick={onRemove} />}
    </div>
  );
};
