import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import styles from './Header.module.scss';

export default function Header(): JSX.Element {
  const { username } = useAppSelector((store) => store.userReducer);

  return (
    <header className={styles.header}>
      <div>React. Forms</div>
      <div>
        {username && <h3>Hello {username}!</h3>}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/registration/uncontrolled">Uncontrolled form</Link>
          <Link to="/registration/controlled">Controlled form</Link>
        </nav>
      </div>
    </header>
  );
}
