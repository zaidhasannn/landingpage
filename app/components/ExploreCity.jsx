import styles from "./ExploreCity.module.css";

const pills = [
  "BIOLOGY",
  "ART",
  "PHILOSOPHY",
  "TECH",
  "SPORTS",
  "ENTERTAINMENT",
  "STOCKS",
  "FINANCE",
  "GAMES"
];

export default function ExploreCity() {
  return (
    <section className={styles.section}>
      <div className={styles.orbContainer}>

       
        <video
          className={styles.orb}
          src="/videos/backg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

     
        {pills.map((p, i) => (
          <span
            key={p}
            className={`${styles.pill} ${styles["pill" + i]}`}
          >
            {p}
          </span>
        ))}

       
        <div className={styles.textOverlay}>
          <p className={styles.kicker}>Explore your</p>

          <h2 className={styles.title}>
            Qyuro<span>.city</span>
          </h2>

          <p className={styles.description}>
            Get news & articles based on your conversations or pick any topic from anywhere!
            <br />
            Qyuro.city is designed to fuel & fulfill your curiosity.
          </p>
        </div>

      </div>
    </section>
  );
}
