import styles from "./ExploreCity.module.css";

export default function ExploreCity() {
  return (
    <section className={styles.section}>
      <div className={styles.orbContainer}>
        {/* Orb */}
        <img src="/giff.png" alt="Qyuro Orb" className={styles.orb} />

        {/* Text overlay */}
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
