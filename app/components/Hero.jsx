import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

     
      <video
        src="/videos/orb.mp4"
        className={styles.orb}
        autoPlay
        loop
        muted
        playsInline
      />

     
      <div className={styles.content}>

        <span className={styles.tagline}>
          Talk. Reflect. Understand.
        </span>

        <h1 className={styles.title}>
          The AI chatbot
          <br />
          that doesn’t guess.
        </h1>

        <p className={styles.subtitle}>
          Experience the power of a conversational assistant
          grounded in real-time truth.
        </p>

        <img
          src="/pl-app.png"
          alt="Download on App Store and Google Play"
          className={styles.stores}
          draggable={false}
        />

      </div>

    </section>
  );
}
