import * as React from 'react';

import styles from './Footer.module.css';

export default function Footer () {
  return (
    <div>
      <footer className={styles.footer}>
        <p>
          <span>React + TS Todo</span> @ {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
