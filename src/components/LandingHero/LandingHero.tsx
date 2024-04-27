import React from 'react';
import styles from './LandingHero.module.scss';

const LandingHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>A new layer of safety for your interactions.</h1>
          <p>
            Introducing SCI (Secure Contract Interactions), an
            <strong> open-source protocol </strong> crafted to
            <strong> safeguard web </strong> domains from unauthorized
            interactions and vulnerabilities.
          </p>
        </div>
        <div className={styles.image}>
          <img src="/images/sci_hero.svg" alt="SCI Hero Illustration" />
        </div>
      </div>
      <div className={styles.divider}></div>
    </section>
  );
};

export default LandingHero;
