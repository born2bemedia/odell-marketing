"use client";

import { motion } from "framer-motion";

import { ContactForm } from "@/features/contact-form/ui/ContactForm";

import { fadeInUp } from "@/shared/lib/helpers/animations";

import styles from "./HomeContact.module.scss";

export const HomeContact = () => {
  return (
    <section className={styles.home_contact}>
      <div className={"container"}>
        <div className={styles.home_contact__header}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.title_black}
          >
            Let’s <span>Define the Context</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.description}
          >
            Use the form below to provide brief context and outline <br />
            the challenges you’re facing.
          </motion.p>
        </div>
        <div className={styles.home_contact__content}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
