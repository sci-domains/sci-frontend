'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  // TODO: Fix menu open an design on mobile
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo/sci_logo.svg" alt="Logo" />
      </div>

      <div className={styles.nav}>
        <Link href="/snap">Snap</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/docs">Docs</Link>
      </div>

      <div className={styles.button}>
        <Link href="/app">Go to App</Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <img src={'/images/icons/burger_icon.svg'} alt={'Menu'} />
        </div>
      </div>

      {menuOpen && ( // Display full-screen menu when open
        <div className={styles.fullScreenMenu}>
          <nav>
            <Link href="/snap" onClick={toggleMenu}>
              Snap
            </Link>
            <Link href="/faq" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link href="/docs" onClick={toggleMenu}>
              Docs
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
