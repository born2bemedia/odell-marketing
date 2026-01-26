"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeThird.module.scss";

export const HomeThird = () => {
  return (
    <section className={styles.home_third}>
      <div className={"container"}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={styles.title_black}
        >
          Scope of Engagement
        </motion.h2>
        <div className={styles.home_third__content}>
          <div className={styles.service_wrapper}>
            <motion.div
              className={styles.description_wrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Marketing Consulting</h3>
              <p>
                I analyse how marketing decisions are formed and justified
                within a business. The focus is on establishing clear reasoning
                behind priorities and trade-offs.
              </p>
              <div>
                <span>Goals and success criteria</span>
                <span>Assumptions and decision inputs</span>
                <span>Constraints shaping marketing choices</span>
                <span>Alignment between strategy and execution</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.image_wrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Image
                src="/images/home/service1.svg"
                alt="Marketing Consulting"
                width={580}
                height={317}
              />
            </motion.div>
          </div>
          <div className={styles.service_wrapper}>
            <motion.div
              className={styles.description_wrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Campaign Planning</h3>
              <p>
              I design campaigns as decision-driven systems with a defined role in the overall strategy. Each campaign is structured to prevent ambiguity during execution.
              </p>
              <div>
                <span>Campaign purpose and strategic role</span>
                <span>Decision logic and sequencing</span>
                <span>Messaging and offer structure</span>
                <span>Execution boundaries and dependencies</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.image_wrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Image
                src="/images/home/service2.svg"
                alt="Marketing Consulting"
                width={428}
                height={300}
              />
            </motion.div>
          </div>
          <div className={styles.service_wrapper}>
            <motion.div
              className={styles.description_wrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3>Marketing Planning</h3>
              <p>
              I structure marketing work across time rather than around isolated initiatives. The goal is to support continuity and controlled progress.
              </p>
              <div>
                <span>Initiative prioritisation</span>
                <span>Sequencing and timing</span>
                <span>Resource and budget alignment</span>
                <span>Coordination across activities</span>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={styles.image_wrapper}
            >
              <Image
                src="/images/home/service3.svg"
                alt="Marketing Consulting"
                width={428}
                height={300}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
