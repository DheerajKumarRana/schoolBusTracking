import React from 'react';
import styles from './page.module.css';

const BusDetailsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Bus Details</h1>
      <div className={styles.details}>
        <img src="https://via.placeholder.com/100" alt="Driver" className={styles.photo} />
        <h2>Driver: Jane Smith</h2>
        <p>Bus Number: 123</p>
        <p>Safety Rating: 4.8/5.0</p>
        <p>Onboard Count: 25/40</p>
      </div>
    </div>
  );
};

export default BusDetailsPage;
