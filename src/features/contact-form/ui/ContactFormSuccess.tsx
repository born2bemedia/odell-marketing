import styles from "./ContactForm.module.scss";

export const ContactFormSuccess = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.contactFormSuccess}>
      <div className={styles.contactFormSuccess__content}>
        <h2>Thank you </h2>
        <p>Thank you for contacting me and for taking the time to outline your situation in detail. I appreciate the context you’ve shared.</p>
        <span onClick={onClose}>
          <button type="button" className={styles.button}>
          Return to home page
          </button>
        </span>
      </div>
    </div>
  );
};
