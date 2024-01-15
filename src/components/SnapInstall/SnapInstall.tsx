'use client';
import { hasSnap, installSnap } from '@/services/snap/snap';
import React, { useEffect, useState } from 'react'; // Adjust the import path as needed
import styles from './SnapInstall.module.scss';

type SnapInstallProps = {
  snapId: string;
};

const SnapInstall: React.FC<SnapInstallProps> = ({ snapId }) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [error, setError] = useState('');

  const checkSnapInstallation = async () => {
    const installed = await hasSnap(snapId);
    setIsInstalled(installed);
  };

  useEffect(() => {
    checkSnapInstallation();
  }, [snapId]);

  const handleInstall = async () => {
    try {
      await installSnap(snapId);
      setIsInstalled(true);
    } catch (err: unknown) {
      if (!(err && typeof err === 'object' && 'message' in err)) {
        setError('An unknown error occurred');
        return;
      }
      setError((err as { message: string }).message);
    }
  };

  return (
    <div>
      <button
        className={styles.snapInstallButton}
        onClick={handleInstall}
        disabled={isInstalled}
      >
        {isInstalled ? 'Installed' : 'Install Snap'}
      </button>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default SnapInstall;
