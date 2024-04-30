import React from 'react';
import styles from './WebAppSection.module.scss';
export const WebAppSection: React.FC = () => {
  return (
    <section className={styles.webAppSection}>
      <h3 className={styles.tag}>Web Application</h3>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Enhance Your dApp Security</h1>
          <p className={styles.description}>
            Our upcoming web application offers a straightforward solution to
            verify domain authenticity and securely associate your smart
            contracts contracts with your domain. You will be able to easily
            manage your ensuring that only your approved contracts can interact
            with your domain.
          </p>
        </div>
        <div className={styles.image}>
          <img src="/images/sci_webapp.svg" alt="SCI WebApp Illustration" />
        </div>
      </div>
  
      <p className={styles.contactUs}>
        <span className={styles.highlighted}>
          Stay tuned for the upcoming release our web application. Meanwhile,{' '}
        </span>
        <strong className={styles.highlighted}>
          you can start whitelisting your smart contracts at{' '}
          <a className={styles.mailto} href={'mailto:support@sci.domains'}>
            support@sci.domains
          </a>
        </strong>
      </p>
    </section>
  );
};
