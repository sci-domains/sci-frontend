'use client';
import { Button } from '@/components/ui/button';
import { hasSnap, installSnap } from '@/services/snap/snap';
import React, { useEffect, useState } from 'react';

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
    <div className={'flex flex-col justify-center items-center'}>
      <Button
        className="w-1/2"
        size="lg"
        variant={'secondary'}
        onClick={handleInstall}
        disabled={isInstalled}
      >
        {isInstalled ? 'Installed' : 'Install Snap'}
      </Button>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">
        Metamask required*
      </p>
      {error && (
        <div className="text-sm mt-1 text-red-600 dark:text-red-500 text-center">
          {error}
        </div>
      )}
    </div>
  );
};

export default SnapInstall;
