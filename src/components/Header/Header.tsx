import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div>React. Forms</div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/registration/uncontrolled">Uncontrolled form</Link>
          <Link to="/registration/controlled">Controlled form</Link>
        </nav>
      </div>
    </header>
  );
}
