import React from 'react';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import { useAppSelector } from '../../redux/hooks/hooks';
import styles from './HomePage.module.scss';

export default function HomePage(): JSX.Element {
  const users = useAppSelector((store) => store.usersReducer);

  return (
    <>
      <Header />
      <main className={styles.main} key={`home-page-main`}>
        {!users.length ? (
          'Home Page'
        ) : (
          <>
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </>
        )}
      </main>
    </>
  );
}
