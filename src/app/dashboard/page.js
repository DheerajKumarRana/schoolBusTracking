'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import MapComponent from '../../components/MapComponent';
import ChildInfoCard from '../../components/ChildInfoCard';
import Loader from '../../components/Loader';
import { getBusDetails } from '../../services/busService';
import Button from '../../components/Button';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const [busDetails, setBusDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const child = {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/60',
    class: '5A',
    busId: 'bus123', // Example bus ID
  };

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const details = await getBusDetails(child.busId);
        setBusDetails(details);
      } catch (err) {
        setError('Failed to fetch bus details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusDetails();
  }, [child.busId]);

  const handleSetNotification = () => {
    router.push('/notifications');
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <ChildInfoCard child={child} />
      <MapComponent />
      <div className={styles.details}>
        <div className={styles.eta}>
          <p>Estimated Arrival</p>
          <p>15 mins</p>
        </div>
        <div className={styles.busInfo}>
          <h2>Bus Details</h2>
          {busDetails ? (
            <>
              <p>Driver: {busDetails.driverName}</p>
              <p>Bus Number: {busDetails.busNumber}</p>
            </>
          ) : (
            <p>No bus details available.</p>
          )}
        </div>
      </div>
      <Button onClick={handleSetNotification} fullWidth>
        Set Notification Preferences
      </Button>
    </div>
  );
};

export default DashboardPage;
