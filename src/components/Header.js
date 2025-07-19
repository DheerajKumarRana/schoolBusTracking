import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/dashboard">
        <h1>School Bus Tracker</h1>
      </Link>
      <nav className={styles.nav}>
        <Link href="/profile">Profile</Link>
        <Link href="/support">Support</Link>
        <Link href="/bus-details">Bus Details</Link>
      </nav>
    </header>
  );
};

export default Header;
