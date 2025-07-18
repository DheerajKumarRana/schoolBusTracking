import React from 'react';
import styles from './StatusBadge.module.css';

const StatusBadge = ({ status }) => {
  const statusClass = status ? status.toLowerCase().replace(' ', '') : '';
  return (
    <span className={`${styles.badge} ${styles[statusClass]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
