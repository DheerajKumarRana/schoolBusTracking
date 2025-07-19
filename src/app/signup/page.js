'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import Button from '../../components/Button';
import { signupUser } from '../../services/authService';

const SignupPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupUser(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form className={styles.form} onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" fullWidth>
          Sign Up
        </Button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default SignupPage;
