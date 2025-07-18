import React from 'react';
import styles from './page.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form}>
        <input type="email" placeholder="Email or Phone" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <div className={styles.links}>
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
