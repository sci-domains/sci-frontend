import { FC } from 'react';
import { Connector, useConnect } from 'wagmi';

import Modal from '../Modal/Modal';
import styles from './WalletModal.module.scss';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const { connect, connectors, isLoading, pendingConnector } = useConnect();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={styles.title}>Connect your wallet</h2>
      <div className={styles.content}>
        {connectors.map((connector: Connector) => (
          <button
            key={connector.id}
            onClick={() => connect({ connector })}
            disabled={!connector.ready || isLoading}
            className={styles.walletOption}
          >
            <img
              src={connector.icon}
              alt={`${connector.name} icon`}
              className={styles.walletIcon}
            />
            <span className={styles.walletName}>
              {connector.name}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                ' (connecting...)'}
            </span>
          </button>
        ))}
      </div>
    </Modal>
  );
};

export { Modal, WalletModal };
