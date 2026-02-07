import styles from "./Footer.module.css";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>

       
        <div className={styles.brand}>
          <img src="/logo.png" alt="Qyuro logo" />
          <h3>Qyuro</h3>
          <p>Talk. Reflect. Understand.</p>
          <span className={styles.copyright}>
            © 2026 Qyuro AI Inc.
          </span>
        </div>

       
        <div className={styles.glass}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h4>Product</h4>
              <a>Home</a>
              <a>Features</a>
              <a>Pricing</a>
            </div>

            <div className={styles.column}>
              <h4>Resources</h4>
              <a>Blog</a>
              <a>Changelog</a>
              <a>Help Centre</a>
              <a>Community</a>
            </div>

            <div className={styles.column}>
              <h4>Company</h4>
              <a>About Us</a>
              <a>Careers</a>
              <a>Brand Guidelines</a>
              <Link href="/contact">Contact Us</Link>

              <a>Press</a>
            </div>

            <div className={styles.column}>
              <h4>Legal</h4>
              <a>Privacy Policy</a>
              <Link href="/service">Terms of use</Link>
              <Link href="/security">Security</Link>
            </div>

            <div className={styles.column}>
              <h4>Compare to</h4>
              <a>ChatGPT</a>
              <a>Perplexity</a>
              <a>Gemini</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
