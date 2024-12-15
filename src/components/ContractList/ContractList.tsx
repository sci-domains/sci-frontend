import React from 'react';
import styles from './ContractList.module.scss';
import { ContractRow } from './ContractRow';

const contractData = {
  address: '0x7637271211d3b4c542e93bceeaadd5f45c3e2cd0',
  chainIcons: ['/images/icons/chains/polygon.svg'],
};

export const ContractList: React.FC = () => {
  return (
    <div className={styles.container}>
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
          <div className={styles.columnHeader}>
            Contract address
            <button
              onClick={() => {
                /* Add logic to order the addresses contract */
              }}
              className={styles.sortButton}
            >
              <img src="/images/icons/drop-down.svg" alt="" loading="lazy" />
            </button>
          </div>
        </div>
        <div className={styles.chainColumn}>Chain</div>
      </div>
      <div className={styles.divider} />
      <ContractRow {...contractData} />
    </div>
  );
};

export default ContractList;
