import React, { useState } from 'react';
import styles from './ContractUpload.module.scss';
import { UploadCard } from './UploadCard/UploadCard';

export const ContractUpload: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<'manual' | 'csv'>('manual');
  const [fileName, setFileName] = useState<string>('');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contracts:</h2>
      <div className={styles.uploadOptions}>
        <UploadCard title="Add manually" isActive={activeMethod === 'manual'}>
          <form className={styles.uploadForm}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.input}
                placeholder="Contract address"
                aria-label="Enter contract address"
              />
              <button type="submit" className={styles.button}>
                Add address
              </button>
            </div>
          </form>
        </UploadCard>

        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerText}>OR</span>
          <div className={styles.dividerLine} />
        </div>

        <UploadCard title="Upload a CSV" isActive={activeMethod === 'csv'}>
          <form className={styles.uploadForm}>
            <div className={styles.inputGroup}>
              <div className={`${styles.input} ${styles.error}`}>
                <span>{fileName || 'mycontracts_v4.CSV'}</span>
              </div>
              <button type="submit" className={styles.button}>
                Upload CSV
              </button>
            </div>
          </form>
        </UploadCard>
      </div>
    </div>
  );
};

export default ContractUpload;
