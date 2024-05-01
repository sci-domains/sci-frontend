'use client';
import MetamaskLogoViewer from '@/components/MetamaskLogoViewer/MetamaskLogoViewer';
import SnapInstall from '@/components/SnapInstall/SnapInstall';
import React from 'react';
import styles from './SnapSection.module.scss';
export const SnapSection: React.FC = () => {
  return (
    <section className={styles.snapContainer}>
      <h3>SCI Metamask Snap</h3>
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <h1>Secure your web3 journey</h1>
          <p>
            SCI effortlessly enhances your web3 security by{' '}
            <strong>
              verifying the smart contract address and domain involved in your
              transactions{' '}
            </strong>
            through our MetaMask Snap
          </p>
          <p>
            Your routine remains undisturbed while you are assured that
            you&apos;re interacting with whitelisted contracts authorized by the
            legitimate dApp owners, safeguarding against any unauthorized
            alterations or hijacking.
          </p>
          <SnapInstall snapId={process.env.NEXT_PUBLIC_SCI_SNAP_URL!} />
        </div>
        <div className={styles.metamaskContainer}>
          <div className={styles.sciLogo}>
            <img src="/images/logo/sci_logo.svg" alt="Logo" />
          </div>
          <MetamaskLogoViewer width={129} height={129} />
        </div>
      </div>
    </section>
  );
};
