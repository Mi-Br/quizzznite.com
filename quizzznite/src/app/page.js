import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1 className={styles.intro} >
          Welcome to Quizzznite!
        </h1>
        <a href="/quiz">Play</a>
        <a href="/quiz">Play</a>
      </main>
    </div>
  );
}
