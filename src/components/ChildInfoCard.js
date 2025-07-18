import React from 'react';
import styles from './ChildInfoCard.module.css';

const ChildInfoCard = ({ child }) => {
  return (
    <div className={styles.card}>
      <img src={child.photo} alt={child.name} className={styles.photo} />
      <div className={styles.info}>
        <h2>{child.name}</h2>
        <p>Class: {child.class}</p>
      </div>
    </div>
  );
};

export default ChildInfoCard;
