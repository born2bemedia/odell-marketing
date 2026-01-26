"use client";

import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeFooter.module.scss";

export const HomeFooter = () => {
  return (
    <section className={styles.home_footer}>
      <div className={"container"}>
        <div className={styles.home_footer__row}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title_black}
          >
            Marketing consulting and <br />
            planning services
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span>Address:</span>
            <p>6 Lookout Ave Blaxland NSW 2774 Australia</p>
          </motion.div>
        </div>
        <div className={styles.home_footer__copy}>
          © {new Date().getFullYear()} Operated by Antonio Blefari
        </div>
      </div>
    </section>
  );
};
