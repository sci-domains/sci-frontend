'use client';
import Header from '@/components/HeaderApp/Header';

import Footer from '@/components/Footer/Footer';
import { UserDomainSection } from '@/components/UserDomainSection/UserDomainSection';
import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main} key="1">
      <Header />
      <div className={styles.container}>
        <UserDomainSection />
      </div>
      <Footer />
    </main>
  );
}
