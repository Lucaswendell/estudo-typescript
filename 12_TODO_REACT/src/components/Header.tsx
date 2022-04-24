import * as React from 'react';
import styles from "./Header.module.css";

export default function Header () {
  return (
    <div className={styles.header}>
      <header>
        <h1>React + TS todo</h1>
      </header>
    </div>
  );
}
