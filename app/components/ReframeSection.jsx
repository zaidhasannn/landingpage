"use client";
import { useEffect, useState } from "react";
import styles from "./ReframeSection.module.css";

const frames = [
  "/frames/frame1.png",
  "/frames/frame2.png",
  "/frames/frame3.png",
  "/frames/frame4.png",
  "/frames/frame5.png",
  "/frames/frame6.png",
];

const girls = [
  "/girl/girl1.png",
  "/girl/girl2.png",
  "/girl/girl3.png",
  "/girl/girl4.png",
  "/girl/girl5.png",
  "/girl/girl6.png",
];

export default function ReframeSection() {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % frames.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (

       <section className={styles.section}>
  <div className={styles.container}>
    {/* LEFT */}
    <div className={styles.left}>
      <h1 className={styles.title}>Reframe</h1>
      <p className={styles.description}>
        Lets you use pre-made AI filters so you can make your stunning photos
        even more stunning.
      </p>

      <div className={styles.carousel}>
        
        {/* {frames.map((img, i) => {
  const offset = i - active;
  if (Math.abs(offset) > 2) return null;

  const isActive = offset === 0;
  const isSide = Math.abs(offset) === 1;
  const isOuter = Math.abs(offset) === 2;

  const width = isActive ? 139 : isSide ? 111 : 64;
  const height = isActive ? 174 : isSide ? 139 : 80;
  const radius = isOuter ? 4 : 8;

  const x =
    isActive ? 0 :
    isSide ? (offset > 0 ? 137 : -137) :
    (offset > 0 ? 237 : -237);

  const y =
    isActive ? -18 :
    isOuter ? 14 : 0;

  return (
    <div
      key={i}
      className={styles.frameCard}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        transform: `translate(${x}px, ${y}px)`,
        zIndex: isActive ? 4 : isSide ? 3 : 2,
      }}
    >
      <img src={img} alt="" />
    </div>
  );
})} */}
       {frames.map((img, i) => {
  const offset = i - active;
  if (Math.abs(offset) > 2) return null;

  const isActive = offset === 0;
  const isSide = Math.abs(offset) === 1;
  const isOuter = Math.abs(offset) === 2;

  const width = isActive ? 139 : isSide ? 111 : 64;
  const height = isActive ? 174 : isSide ? 139 : 80;
  const radius = isOuter ? 4 : 8;

  const x =
    isActive ? 0 :
    isSide ? (offset > 0 ? 117 : -117) :
    (offset > 0 ? 197 : -197);

  const y =
    isActive ? -18 :
    isOuter ? 14 : 0;

  return (
    <div
      key={i}
      className={styles.frameCard}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${radius}px`,
        transform: `translate(${x}px, ${y}px)`,
        zIndex: isActive ? 4 : isSide ? 3 : 2,
      }}
    >
      <img src={img} alt="" />
    </div>
  );
})}



        
      </div>
    </div>

    {/* RIGHT */}
    {/* <div className={styles.right}>
      <img src={girls[active]} alt="" className={styles.hero} />
    </div> */}
    <div className={styles.right}>
  {girls.map((img, i) => (
    <img
      key={i}
      src={img}
      alt=""
      className={`${styles.hero} ${
        i === active ? styles.heroActive : styles.heroInactive
      }`}
    />
  ))}
</div>

  </div>
</section>

  );
}
