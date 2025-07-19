import React from 'react';
import styles from './page.module.css';
import Button from '../../components/Button';

const SupportPage = () => {
  return (
    <div className={styles.container}>
      <h1>Support</h1>
      <div className={styles.buttons}>
        <Button>Call Transport In-Charge</Button>
        <Button>Email Support</Button>
      </div>
      <form className={styles.form}>
        <h2>Report a Problem</h2>
        <textarea placeholder="Describe your problem..."></textarea>
        <Button type="submit" fullWidth>Submit</Button>
      </form>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqItem}>
          <h3>How do I track the bus?</h3>
          <p>Go to the dashboard to see the live location of the bus.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How do I change my notification settings?</h3>
          <p>Go to the notifications page to customize your alerts.</p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
