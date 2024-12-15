'use client';
import Header from '@/components/HeaderApp/Header';

import { DomainDetailSection } from '@/components/DomainDetailSection/DomainDetailSection';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main} key="1">
      <Header />
      <div className={styles.container}>
        <DomainDetailSection />
      </div>
      <Footer />
    </main>
  );
}
