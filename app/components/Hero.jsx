import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

         {/* Tagline pill */}
      <span className={styles.tagline}>
        Talk. Reflect. Understand.
      </span>

      {/* Orb (glow is INSIDE this image) */}
      <img
        src="/core.png"
        alt=""
        className={styles.orb}
        draggable={false}
      />

     
      {/* Headline */}
      <h1 className={styles.title}>
        The AI chatbot
        <br />
        that doesn’t guess.
      </h1>

      {/* Subtitle */}
      <p className={styles.subtitle}>
        Experience the power of a conversational assistant
        grounded in real-time truth.
      </p>

      {/* Store buttons (single image) */}
      <img
        src="/pl-app.png"
        alt="Download on App Store and Google Play"
        className={styles.stores}
        draggable={false}
      />
    </section>
  );
}
