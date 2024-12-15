'use client';
import SearchBar from '@/components/SearchBar/SearchBar';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    // TODO add here the logic to filter the domains
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <Link href="#app">Connect</Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <img src={'/images/icons/burger_icon.svg'} alt={'Menu'} />
        </div>
      </div>

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
