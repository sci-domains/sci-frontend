'use client';
import {
  hasSnap,
  installSnap,
  isMetaMaskInstalled,
} from '@/services/snap/snap';
import React, { useEffect, useState } from 'react';
import styles from './SnapInstall.module.scss';

type SnapInstallProps = {
  snapId: string;
};

const SnapInstall: React.FC<SnapInstallProps> = ({ snapId }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(true);
  const [error, setError] = useState('');

  const checkSnapInstallation = async () => {
    if (!isMetaMaskInstalled()) {
      setIsMetamaskInstalled(false);
      setError(
        'MetaMask is not installed. Please install MetaMask to use this feature.',
      );
      return;
    }
    const installed = await hasSnap(snapId);
    setIsInstalled(installed);
  };

  useEffect(() => {
    checkSnapInstallation();
  }, [snapId]);

  const handleInstall = async () => {
    if (!isMetaMaskInstalled()) {
      window.open(
        'https://metamask.io/download/',
        '_blank',
        'noopener,noreferrer',
      );
      return;
    }
    try {
      await installSnap(snapId);
      setIsInstalled(true);
      setError('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.snapInstallButton}
        onClick={handleInstall}
        disabled={isInstalled}
      >
        {isInstalled
          ? 'Snap already installed'
          : isMetamaskInstalled
            ? 'Install SCI Metamask Snap'
            : 'Install MetaMask'}
      </button>
      {error && (
        <div className="text-sm mt-1 text-red-600 dark:text-red-500 text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default SnapInstall;
