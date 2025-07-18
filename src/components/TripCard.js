import React from 'react';
import styles from './TripCard.module.css';
import StatusBadge from './StatusBadge';

const TripCard = ({ trip }) => {
  return (
    <div className={styles.card}>
      <div className={styles.date}>{trip.date}</div>
      <div className={styles.details}>
        <p>Pickup: {trip.pickup}</p>
        <p>Drop: {trip.drop}</p>
      </div>
      <StatusBadge status={trip.status} />
    </div>
  );
};

export default TripCard;
