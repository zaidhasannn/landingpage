

"use client";
import { useState } from "react";
import styles from "./DiagonalSection.module.css";

export default function DiagonalSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [openFaq, setOpenFaq] = useState([]);

  const cards = [
    {
      title: "Today’s Alignments",
      description:
        "Explore planetary alignments and cosmic movements shaping the moment. Insights to help you reflect, realign, and move with the universe.",
    },
    {
      title: "Today’s Alignments",
      description:
        "Explore planetary alignments and cosmic movements shaping the moment. Insights to help you reflect, realign, and move with the universe.",
    },
    {
      title: "Today’s Alignments",
      description:
        "Explore planetary alignments and cosmic movements shaping the moment. Insights to help you reflect, realign, and move with the universe.",
    },
    {
      title: "Today’s Alignments",
      description:
        "Explore planetary alignments and cosmic movements shaping the moment. Insights to help you reflect, realign, and move with the universe.",
    },
  ];

  return (
    <section className={styles.section}>
      <img src="/bgdiag.png" alt="" className={styles.diagonalImage} />

      <div className={styles.content}>
        <div className={styles.innerSignsWrapper}>
          <div className={styles.innerSigns}>
            <h2>Inner signs</h2>
            <p>
              Takes care of yourself. Aligns your health,
              mind and stars, because that’s what an
              assistant should take care of
            </p>
          </div>

          <div className={styles.iconRail}>
            {[
              "/icons/phool.png",
              "/icons/heart.png",
              "/icons/sun.png",
              "/icons/hand.png",
            ].map((src, index) => (
              <div
                key={index}
                className={`${styles.innerIcon} ${
                  activeIndex === index ? styles.innerIconActive : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={src} alt="" />
              </div>
            ))}
          </div>

          <div className={styles.cardWrapper}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  activeIndex === index ? styles.cardActive : ""
                }`}
              >
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

     
        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>FAQs</h2>

          <div className={styles.faqList}>

            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${
                  openFaq.includes(i) ? styles.faqItemOpen : ""
                }`}
                onClick={() =>
                  setOpenFaq((prev) =>
                    prev.includes(i)
                      ? prev.filter((x) => x !== i)
                      : [...prev, i]
                  )
                }
              >
                <span>## question goes here, ## question goes here?</span>

                {!openFaq.includes(i) && (
                  <div className={styles.faqIcon} />
                )}

                <div className={styles.faqAnswer}>
                  ## answer goes here, ## answer goes here?
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
