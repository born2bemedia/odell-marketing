import styles from "./ContactForm.module.scss";

export const ContactFormSuccess = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.contactFormSuccess}>
      <div className={styles.contactFormSuccess__content}>
        <h2>Message received</h2>
        <span onClick={onClose}>
          <button type="button" className={styles.button}>
            Continue
          </button>
        </span>
      </div>
    </div>
  );
};
