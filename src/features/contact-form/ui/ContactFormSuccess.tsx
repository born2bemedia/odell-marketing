
import styles from './ContactForm.module.scss';

export const ContactFormSuccess = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={styles.contactFormSuccess}>
      <div className={styles.contactFormSuccess__content}>
        
        <h2>
        Your request has been
          <span>submitted successfully</span>
        </h2>
        <p>
        Our team will reach out within the next business day.
        </p>
        <span onClick={onClose}>
          <button type="button" className={styles.button}>
            Continue
          </button>
        </span>
      </div>
    </div>
  );
};
