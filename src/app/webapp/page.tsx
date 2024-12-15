import Header from '@/components/HeaderApp/Header';

import { DomainSearchSection } from '@/components/DomainSearchSection/DomainSearchSection';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main} key="1">
      <Header />
      <div className={styles.container}>
        <DomainSearchSection />
      </div>
      <Footer />
    </main>
  );
}
