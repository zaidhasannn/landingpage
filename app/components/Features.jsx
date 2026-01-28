import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.section}>
      {/* ===== TOP INTRO ===== */}
      <div className={styles.intro}>
        <h2 className={styles.heading}>
          Beyond Search. Smarter than Chat.
        </h2>

        <p className={styles.description}>
          Qyoro isn’t just a search engine, it’s a thinking partner.
          Chat naturally, ask complex questions, and get direct answers
          backed by live sources. No hallucinations. No outdated training
          data. Just verified intelligence.
        </p>

        <p className={styles.description}>
          We combined the conversational fluency of a robust LLM with the
          real-time accuracy of a search engine.
        </p>
      </div>

      {/* ===== LOWER CONTENT ===== */}
      <div className={styles.contentRow}>
        {/* Left abstract visual */}
       <div className={styles.abstractWrapper}>
    <img src="/sidelogo.png" alt="" />
  </div>

        {/* Right features */}
        <div className={styles.features}>
          <div className={`${styles.feature} ${styles.context}`}>
            <h3>Conversational Context:</h3>
            <p>
              Don’t start over. Qyoro remembers what you just said.
              Ask follow-up questions, refine your query, or dive deeper
              into a specific point just like you would with a human expert.
            </p>
          </div>

          <div className={`${styles.feature} ${styles.grounding}`}>
            <h3>Real-Time Grounding:</h3>
            <p>
              Standard chatbots are stuck in the past. Qyoro lives in the
              now. Whether it’s today’s stock prices or news from five
              minutes ago, our AI has access to the live web.
            </p>
          </div>

           <div className={`${styles.feature} ${styles.hallucinations}`}>
            <h3>Zero Hallucinations:</h3>
            <p>
              Creativity is great for poetry, not for facts.
              We engineered Qyoro to prioritize accuracy.
              Every claim is cited, linked, and verifiable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}