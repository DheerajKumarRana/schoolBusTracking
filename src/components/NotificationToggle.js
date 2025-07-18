import React from 'react';
import styles from './NotificationToggle.module.css';

const NotificationToggle = ({ label, enabled, onToggle }) => {
  return (
    <div className={styles.toggleContainer}>
      <span>{label}</span>
      <label className={styles.switch}>
        <input type="checkbox" checked={enabled} onChange={onToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default NotificationToggle;
