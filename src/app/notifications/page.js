'use client';
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import NotificationToggle from '../../components/NotificationToggle';
import Loader from '../../components/Loader';
import { getNotificationSettings, updateNotificationSettings } from '../../services/notificationService';
import Button from '../../components/Button';

const NotificationsPage = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = 'user123'; // Example user ID

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const userSettings = await getNotificationSettings(userId);
        setSettings(userSettings);
      } catch (err) {
        setError('Failed to fetch notification settings.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, [userId]);

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    try {
      await updateNotificationSettings(userId, settings);
      alert('Settings saved!');
    } catch (err) {
      setError('Failed to save settings.');
      console.error(err);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <h1>Notifications</h1>
      {settings && (
        <>
          <NotificationToggle
            label="Bus Leaves School"
            enabled={settings.busLeaves}
            onToggle={() => handleToggle('busLeaves')}
          />
          <NotificationToggle
            label="Bus is 5 minutes away"
            enabled={settings.busArrives}
            onToggle={() => handleToggle('busArrives')}
          />
          <NotificationToggle
            label="Child Boards Bus"
            enabled={settings.boards}
            onToggle={() => handleToggle('boards')}
          />
          <NotificationToggle
            label="Child Alights Bus"
            enabled={settings.alights}
            onToggle={() => handleToggle('alights')}
          />
        </>
      )}
      <div className={styles.dnd}>
        <h2>Do Not Disturb</h2>
        <p>Set a time range to mute notifications.</p>
        <div className={styles.timeInputs}>
          <input type="time" />
          <span>-</span>
          <input type="time" />
        </div>
      </div>
      <Button onClick={handleSave} fullWidth>
        Save
      </Button>
    </div>
  );
};

export default NotificationsPage;
