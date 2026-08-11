import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Wiki DIAna & Governança de Dados
      </p>
    </footer>
  );
}