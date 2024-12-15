import React from 'react';
import styles from './ContractList.module.scss';

interface ContractRowProps {
  address: string;
  chainIcons: string[];
}

export const ContractRow: React.FC<ContractRowProps> = ({
  address,
  chainIcons,
}) => {
  return (
    <div className={styles.headerRow}>
      <div className={styles.addressColumn}>
        <div className={styles.checkboxWrapper}>
          <div className={styles.checkboxContainer}>
            <div
              className={styles.checkbox}
              role="checkbox"
              aria-checked="false"
              tabIndex={0}
            />
          </div>
        </div>
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
      <img
        src={'/images/icons/remove.svg'}
        alt="Action"
        className={styles.actionIcon}
        loading="lazy"
      />
    </div>
  );
};
