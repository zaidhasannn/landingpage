
"use client";
import { useState } from "react";
import styles from "./CommunicateSection.module.css";

export default function CommunicateSection() {
  const [showAttach, setShowAttach] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const [mode, setMode] = useState("Fast");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
      
        <h2 className={styles.title}>
          Communicate, but not just with the words
        </h2>

        <p className={styles.subtitle}>
          Talk the way you want. Upload files, send text, or use voice.
          Qyuro connects everything into one clear, continuous conversation.
        </p>

        <div className={styles.chatWrapper}>
        
          {showAttach && (
            <div className={styles.attachMenu}>
              <button>📷 Camera</button>
              <button>🖼️ Photos</button>
              <button>📄 Files</button>
            </div>
          )}

        
          {showMode && (
            <div className={styles.modeMenu}>
              <button onClick={() => setMode("Fast")}>⚡ Fast</button>
              <button onClick={() => setMode("Deep thinking")}>
                🧠 Deep thinking
              </button>
              <button onClick={() => setMode("Friendly")}>
                😊 Friendly
              </button>
            </div>
          )}

          
          <div className={styles.chatRow}>
          
            <div className={styles.chatBox}>
              <button
                className={styles.iconBtn}
                onClick={() => {
                  setShowAttach(!showAttach);
                  setShowMode(false);
                }}
              >
                <img src="/icons/plus.png" alt="add" />
              </button>

              <input
                type="text"
                placeholder="What’s on your mind?"
                disabled
              />

              <button
                className={styles.fastBtn}
                onClick={() => {
                  setShowMode(!showMode);
                  setShowAttach(false);
                }}
              >
                ⚡ {mode}
              </button>
            </div>

           
            <button className={styles.circleBtn}>
              <img src="/icons/mic.png" alt="Mic" />
            </button>

            
            <button className={styles.circleBtn}>
              <img src="/icons/logoicon.png" alt="Qyuro" />
            </button>
          </div>
        </div>

       
        <div className={styles.features}>
          <div className={styles.feature}>
            <h4>Chat with the text:</h4>
            <p>The default mode for broad, real-time knowledge.</p>
          </div>

          <div className={styles.feature}>
            <h4>Chat with files:</h4>
            <p>
              Not just the texts, use images and files to present a query.
            </p>
          </div>

          <div className={styles.feature}>
            <h4>Chat with Voice:</h4>
            <p>
              Extract answers directly from Voice memos.
            </p>
          </div>

          <div className={styles.feature}>
            <h4>Talk to Qyuro:</h4>
            <p>
              Tap into endless discussions with hands-free mode.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
