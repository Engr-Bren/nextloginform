import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Image
          src="./romantic-background.jpg"
          alt="Romantic Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.overlay}>
          <h1 className={styles.message}>
            Xamantha Vic Hedriana (part-part), I love you!
          </h1>
          <p className={styles.subMessage}>
            You are my world, my everything. I cherish every moment with you and can't wait for the countless memories we'll create together. 💖
          </p>
        </div>
      </div>
    </main>
  );
}
