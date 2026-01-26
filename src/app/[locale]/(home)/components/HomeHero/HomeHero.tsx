"use client";

import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeHero.module.scss";

export const HomeHero = () => {
  return (
    <section className={styles.home_hero}>
      <div className={"container"}>
        <video
          src="/videos/hero.mp4"
          preload="auto"
          poster="/images/home/video.webp"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.home_hero__content}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title_wrapper}
          >
            <h1 className={styles.title_black}>
              Marketing <br />
              Effectiveness Depends on Decision Quality
            </h1>
            <span className={styles.title_white}>
              Marketing <br />
              Effectiveness Depends on Decision Quality
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.description_wrapper}
          >
            <p>
              I work with businesses that need to make deliberate marketing
              decisions. <br />
              My role is to help define what matters, why it matters, and what
              should be done next.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
