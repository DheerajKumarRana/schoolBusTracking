'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import ChildInfoCard from '../../components/ChildInfoCard';
import TripCard from '../../components/TripCard';
import Loader from '../../components/Loader';
import { getTripsForChild } from '../../services/tripService';

const ProfilePage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const child = {
    id: 'child123', // Example child ID
    name: 'John Doe',
    photo: 'https://via.placeholder.com/60',
    class: '5A',
  };

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const childTrips = await getTripsForChild(child.id);
        // Mock data if no trips are returned from firebase
        if (childTrips.length === 0) {
          setTrips([
            { id: 1, date: '2024-07-28', pickup: '08:00 AM', drop: '04:00 PM', status: 'On Time' },
            { id: 2, date: '2024-07-27', pickup: '08:05 AM', drop: '04:15 PM', status: 'Delayed' },
            { id: 3, date: '2024-07-26', pickup: 'N/A', drop: 'N/A', status: 'Missed' },
          ]);
        } else {
          setTrips(childTrips);
        }
      } catch (err) {
        setError('Failed to fetch trip history.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [child.id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <ChildInfoCard child={child} />
      <h2 className={styles.tripHistory}>Trip History</h2>
      <div className={styles.tripList}>
        {trips.length > 0 ? (
          trips.map((trip) => <TripCard key={trip.id} trip={trip} />)
        ) : (
          <p>No trip history available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
