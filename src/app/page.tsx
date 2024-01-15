import SnapInstall from '@/components/SnapInstall/SnapInstall';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.center}>
          <SnapInstall snapId={'npm:@metamask/template-snap'} />
        </div>
      </div>
    </main>
  );
}
