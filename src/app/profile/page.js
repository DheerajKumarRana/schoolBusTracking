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
        setTrips(childTrips);
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
      {trips.length > 0 ? (
        trips.map((trip) => <TripCard key={trip.id} trip={trip} />)
      ) : (
        <p>No trip history available.</p>
      )}
    </div>
  );
};

export default ProfilePage;
