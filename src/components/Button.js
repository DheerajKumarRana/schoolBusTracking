import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, type = 'button', fullWidth = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${fullWidth ? styles.fullWidth : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
