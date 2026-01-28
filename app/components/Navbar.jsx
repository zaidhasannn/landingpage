"use client";

import { useRef } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const pillRef = useRef(null);
  const pillTextRef = useRef(null);
  const listRef = useRef(null);

  const movePill = (e) => {
    const link = e.currentTarget;
    const linkRect = link.getBoundingClientRect();
    const listRect = listRef.current.getBoundingClientRect();

    pillRef.current.style.width = `${linkRect.width}px`;
    pillRef.current.style.left = `${linkRect.left - listRect.left}px`;
    pillRef.current.style.opacity = "1";

    // ✅ put text INSIDE the pill
    pillTextRef.current.innerText = link.innerText;
    pillTextRef.current.setAttribute("data-text", link.innerText);
  };

  const hidePill = () => {
    pillRef.current.style.opacity = "0";
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        {/* <img src="/logo.png" alt="Qyuro logo" /> */}
        <div className={styles.logoIcon}>Q</div>
        <span className={styles.logoText}>QYURO</span>
      </div>

      {/* Links */}
      <ul
        className={styles.links}
        ref={listRef}
        onMouseLeave={hidePill}
      >
        {/* 🔥 FIXED PILL */}
        <span ref={pillRef} className={styles.hoverPill}>
          <span ref={pillTextRef} className={styles.pillText} ></span>
        </span>

        <li><Link href="#about" onMouseEnter={movePill}>About</Link></li>
        <li><Link href="#features" onMouseEnter={movePill}>Features</Link></li>
        <li><Link href="#city" onMouseEnter={movePill}>Qyuro.city</Link></li>
        <li><Link href="#support" onMouseEnter={movePill}>Support</Link></li>
        <li><Link href="#blogs" onMouseEnter={movePill}>Blogs</Link></li>
      </ul>

      {/* CTA */}
      <button className={styles.cta}>Download</button>
    </nav>
  );
}
