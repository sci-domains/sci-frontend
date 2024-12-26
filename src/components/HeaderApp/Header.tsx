'use client';
import SearchBar from '@/components/SearchBar/SearchBar';
import { WalletModal } from '@/components/WalletModal/WalletModal';
import { useWallet } from '@/hooks/useWallet';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { isModalOpen, setIsModalOpen, isConnected, address } = useWallet();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    // TODO add here the logic to filter the domains
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleConnect = () => {
    setIsModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <div className={styles.logo}>
          <img src="/images/logo/sci_logo.svg" alt="Logo" />
        </div>
        <SearchBar
          className={styles.searchBarDestkop}
          placeholder="Search for a domain"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className={styles.nav}>
        <Link href="/support">My Domains</Link>
        <Link href="/support">Support</Link>
      </div>

      <div className={styles.button}>
        {isConnected ? (
          <div className={styles.connectedState}>
            <button className={styles.chainSelect}>
              <img src="/images/chains/ethereum.svg" alt="Ethereum" />
              Mainnet
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button className={styles.walletButton}>
              {address?.slice(0, 6)}...{address?.slice(-4)}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        ) : (
          <button onClick={handleConnect}>Connect</button>
        )}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <img src="/images/icons/burger_icon.svg" alt="Menu" />
        </div>
      </div>

      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {menuOpen && (
        <div className={styles.fullScreenMenu}>
          <nav>
            <SearchBar
              className={styles.searchBarMobile}
              placeholder="Search for a domain"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className={styles.divider} />
            <Link href="#snap" onClick={toggleMenu}>
              Snap
            </Link>
            <Link href="#faq" onClick={toggleMenu}>
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
