import FAQ from '@/components/FAQSection/FAQ/FAQ';
import Link from 'next/link';
import React from 'react';
import styles from './FAQSection.module.scss';
export const FAQSection: React.FC = () => {
  return (
    <section className={styles.faqSection}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>
            Is there something you would like to know that is not included on
            the Frequently Asked Questions?{' '}
            <strong>Don’t hesitate to reach us!</strong>
          </p>
          <div className={styles.button}>
            <Link href="mailto:support@sci.domains">Contact us</Link>
          </div>
        </div>
        <div className={styles.faqs}>
          <FAQ />
        </div>
      </div>
    </section>
  );
};
