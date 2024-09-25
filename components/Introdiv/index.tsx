// components/TextImageSection.js

import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import lottieImage from '../../images/lottie-home-pic1.webp'; // Ensure the image path is correct

const TextImageSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={lottieImage}
          alt="Kaeera Ventures Animation"
          width={500}
          height={500}
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>We love Kaeera Infotechnology</h2>
        <p className={styles.description}>
          What we provide Our company Kaeera provides SEO, content marketing, social media management and Pay Per Click advertising solutions. By being particular with details collected and managed, every campaign is designed to generate the most out of it in terms of traffic and conversion. Where we terminate by marketing, our consultation services include analyses and solutions for improving your whole business.
        </p>
      </div>
    </div>
  );
};

export default TextImageSection;
