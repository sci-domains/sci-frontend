import { useWallet } from '@/hooks/useWallet';
import { Domain } from '@/types/domain';
import React, { useMemo, useState } from 'react';
import { DomainContext, DomainStatus } from '.';
import { DomainProviderContext } from './types';

export const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<DomainProviderContext['state']>({
    data: null,
    isLoading: true,
    error: null,
  });

  const { address, isConnected } = useWallet();

  const isOwner = useMemo(() => {
    if (!state.data?.owner || !isConnected || !address) return false;
    return state.data.owner.toLowerCase() === address.toLowerCase();
  }, [state.data?.owner, isConnected, address]);

  const canRegister = useMemo(() => {
    const domainStatus = getDomainStatus();
    return isConnected && domainStatus === DomainStatus.NOT_REGISTERED;
  }, [isConnected, state.data]);

  const loadDomain = async (domainName: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      const response = await fetch(`/api/domains/${domainName}`);
      const domain: Domain = await response.json();
      setState({ data: domain, isLoading: false, error: null });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: 'Failed to load domain information',
      }));
    }
  };

  const getDomainStatus = (): DomainStatus => {
    if (!state.data?.verifier) return DomainStatus.NOT_VERIFIED;
    if (!state.data?.owner) return DomainStatus.NOT_REGISTERED;
    if (state.data?.whitelist?.length === 0)
      return DomainStatus.REGISTERED_NO_CONTRACTS;
    return DomainStatus.REGISTERED_WITH_CONTRACTS;
  };

  const registerDomain = async () => {
    if (!isConnected) throw new Error('Wallet not connected');
    if (!canRegister) throw new Error('Domain cannot be registered');
    // TODO: Implementation for domain registration
  };

  return (
    <DomainContext.Provider
      value={{
        state,
        loadDomain,
        getDomainStatus,
        registerDomain,
        isOwner,
        canRegister,
      }}
    >
      {children}
    </DomainContext.Provider>
  );
};
