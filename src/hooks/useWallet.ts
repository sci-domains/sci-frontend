import { useState } from 'react';
import type { Connector } from 'wagmi';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

interface UseWalletReturn {
  address?: string;
  isConnected: boolean;
  isLoading: boolean;
  connect: (connector: Connector) => void;
  disconnect: () => void;
  connectors: readonly Connector[];
  pendingConnector?: Connector;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export const useWallet = (): UseWalletReturn => {
  const { address, isConnected } = useAccount();
  const { connect, connectAsync, connectors, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleConnect = async (connector: Connector) => {
    try {
      await connectAsync({ connector });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  return {
    address,
    isConnected,
    isLoading,
    connect: handleConnect,
    disconnect,
    connectors,
    pendingConnector,
    isModalOpen,
    setIsModalOpen,
  };
};
