// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/images/logo/sci_logo_white.svg" alt="SCI Logo" />
      </div>
      <div className={styles.trademark}>
        SCI© <br /> Secure Contract Interactions <br /> 2024
      </div>
    </footer>
  );
};

export default Footer;
