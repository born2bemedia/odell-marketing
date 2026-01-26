"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeFourth.module.scss";

export const HomeFourth = () => {
  return (
    <section className={styles.home_fourth}>
      <div className={"container"}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.title_black}
        >
          How the Work Proceeds
        </motion.h2>
        <div className={styles.home_fourth__content}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.home_fourth__content_item}
          >
            <h3>Context</h3>
            <p>
              Business objectives, constraints, and the current situation are
              defined.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.home_fourth__content_item}
          >
            <h3>Structure</h3>
            <p>Priorities, logic, and decision frameworks are established.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.home_fourth__content_item}
          >
            <h3>Delivery</h3>
            <p>Clear documentation is provided for independent execution.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
