'use client';
import React from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, you'd have authentication logic here
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <h1>School Bus Tracker</h1>
      <form className={styles.form}>
        <input type="email" placeholder="Email or Phone" required />
        <input type="password" placeholder="Password" required />
        <Button type="button" onClick={handleLogin} fullWidth>
          Login
        </Button>
        <div className={styles.links}>
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
