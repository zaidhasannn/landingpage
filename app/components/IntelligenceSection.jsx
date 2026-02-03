"use client";
import styles from "./IntelligenceSection.module.css";

export default function IntelligenceSection() {
  return (
    <section className={styles.section}>
    
      <div className={styles.orbTop}>
        <video
          src="/videos/orb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
       
      </div>

  
      <div className={styles.orbBottom}>
        <video
          src="/videos/orb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className={styles.textTop}>
        <h2>Not just listen, Qyuro understands</h2>
        <p>
          Qyuro uses advance models to understand every query deeply.
          Qyuro can understand every mood, tone and atmosphere instantly.
        </p>
      </div>

    
      <div className={styles.textBottom}>
        <h2>And reflect with intellect</h2>
        <p>
          Qyuro’s smart model mimics moods and replies as per the User’s need.
          It can be anything, from your doctor to your best friend.
        </p>
      </div>
    </section>
  );
}
