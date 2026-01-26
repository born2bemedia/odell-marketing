"use client";

import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeSecond.module.scss";

export const HomeSecond = () => {
  return (
    <section className={styles.home_second}>
      <div className={"container"}>
        <div className={styles.home_second__content}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title_black}
          >
            What I’m Usually Brought In For
          </motion.h2>
          <div className={styles.description_wrapper}>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title_wrapper}
            >
              Unclear logic behind marketing decisions
            </motion.p>
            <span className={styles.separator}></span>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title_wrapper}
            >
              Fragmented or inconsistent campaign planning
            </motion.p>
            <span className={styles.separator}></span>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title_wrapper}
            >
              Difficulty justifying budget allocation
            </motion.p>
            <span className={styles.separator}></span>
            <motion.p
                initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title_wrapper}
            >
              Absence of prioritisation criteria
            </motion.p>
            <span className={styles.separator}></span>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title_wrapper}
            >
              Structural gaps revealed during execution
            </motion.p>
            <span className={styles.separator}></span>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.title_wrapper}
            >
              Preparation for growth, launch, or organisational change
            </motion.p>
          </div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title_black}
          >
            These conditions usually indicate a need for a clearer decision
            structure before further execution.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
