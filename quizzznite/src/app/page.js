import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1 className={styles.intro} >
          Welcome to Quizzznite!
        </h1>
        <Link href="/challenges" className="button primary">Go to challenges</Link>
      </main>
    </div>
  );
}
