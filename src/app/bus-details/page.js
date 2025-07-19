'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Loader from '../../components/Loader';
import { getBusDetails } from '../../services/busService';

const BusDetailsPage = () => {
  const [busDetails, setBusDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const busId = 'bus123'; // Example bus ID

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const details = await getBusDetails(busId);
        setBusDetails(details);
      } catch (err) {
        setError('Failed to fetch bus details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusDetails();
  }, [busId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Bus Details</h1>
      {busDetails ? (
        <div className={styles.details}>
          <img src={busDetails.driverPhoto} alt="Driver" className={styles.photo} />
          <h2>Driver: {busDetails.driverName}</h2>
          <p>Bus Number: {busDetails.busNumber}</p>
          <p>Route Number: {busDetails.routeNumber}</p>
          <p>Onboard Count: {busDetails.onboardCount}</p>
          <p>Vehicle Model: {busDetails.vehicleModel}</p>
          <p>Safety Rating: {busDetails.safetyRating}</p>
        </div>
      ) : (
        <p>No bus details available.</p>
      )}
    </div>
  );
};

export default BusDetailsPage;
