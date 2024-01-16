import SnapInstall from '@/components/SnapInstall/SnapInstall';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.center}>
          <SnapInstall snapId={'npm:sci-snap'} />
        </div>
      </div>
    </main>
  );
}
