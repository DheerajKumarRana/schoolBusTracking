import React from 'react';
import styles from './page.module.css';

const SupportPage = () => {
  return (
    <div className={styles.container}>
      <h1>Support</h1>
      <div className={styles.buttons}>
        <button>Call Support</button>
        <button>Email Support</button>
      </div>
      <form className={styles.form}>
        <h2>Report a Problem</h2>
        <textarea placeholder="Describe your problem..."></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className={styles.faq}>
        <h2>FAQ</h2>
        {/* Add FAQ items here */}
      </div>
    </div>
  );
};

export default SupportPage;
