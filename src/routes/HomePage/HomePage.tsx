import React from 'react';
import Header from '../../components/Header/Header';
import { useAppSelector } from '../../redux/hooks/hooks';
import styles from './HomePage.module.scss';

export default function HomePage(): JSX.Element {
  const { username, photo, age, country, email, sex } = useAppSelector(
    (store) => store.userReducer
  );
  return (
    <>
      <Header />
      <main data-testid="page-home">
        {!username && 'Home Page'}
        <div className={styles.user}>
          {username && <div>Name: {username}</div>}
          {photo && (
            <img src={photo} alt="Base64 Image" className={styles.photo} />
          )}
          {age && <div>Age: {age}</div>}
          {country && <div>Country: {country}</div>}
          {email && <div>Email: {email}</div>}
          {sex && <div>Gender: {sex}</div>}
        </div>
      </main>
    </>
  );
}
