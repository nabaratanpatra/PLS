"use client";

import { useState, useEffect } from "react";
import styles from "./navbar-cards.module.css";
import Image from "next/image";

export default function Navbarcards() {
  const cards = [
    { src: "/assets/img1.png", title: "Kashmir First Craft Policy Effect" },
    {
      src: "/assets/img-2.jpg",
      title: "Building a sustainaible future for Kashmiri crafts",
    },
    { src: "/assets/img-3.jpg", title: "Building bridges to global market" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide to the next card every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [cards.length]);

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.cardsWrapper}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Slide based on the index
        }}
      >
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={card.src}
              alt="Card Image"
              className="w-full h-full object-cover"
              width={500} // Specify an appropriate width, for example 500px
              height={500} // Specify an appropriate height, for example 500px
            />

            <div className={styles.textContainer}>
              <h2 className={styles.cardHeading}>{card.title}</h2>
              <button className={styles.cardButton}>Discover More</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.paginationDots}>
        {cards.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)} // Change card on dot click
          ></div>
        ))}
      </div>
    </div>
  );
}
