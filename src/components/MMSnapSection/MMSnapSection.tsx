import MetamaskLogoViewer from '@/components/MetamaskLogoViewer/MetamaskLogoViewer';
import SnapInstall from '@/components/SnapInstall/SnapInstall';
import React from 'react';
import styles from './MMSnapSection.module.scss';
export const MMSnapSection: React.FC = () => {
  return (
    <section className={styles.snapSection}>
      <h3 className={styles.tag}>SCI Metamask Snap</h3>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Secure your web3 journey</h1>
          <div className={styles.description}>
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
              you&apos;re interacting with whitelisted contracts authorized by
              the legitimate dApp owners, safeguarding against any unauthorized
              alterations or hijacking.
            </p>
            <SnapInstall snapId={process.env.NEXT_PUBLIC_SCI_SNAP_URL!} />
          </div>
        </div>
        <div className={styles.metamaskLogo}>
          <div className={styles.sciLogo}>
            <img src="/images/logo/sci_logo.svg" alt="Logo" />
          </div>
          <MetamaskLogoViewer width={129} height={129} />
        </div>
      </div>
    </section>
  );
};
