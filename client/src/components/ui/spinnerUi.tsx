import React from "react";
import styles from '@/components/ui/spinnerUi.module.css';

const Spinner = () => (
  <div className={styles.overlay}>
    <div className={styles.spinner}>
      <div className={styles.dot}></div>
      <div className={`${styles.dot} ${styles.dot2}`}></div>
      <div className={`${styles.dot} ${styles.dot3}`}></div>
    </div>
  </div>
);

export default Spinner;
