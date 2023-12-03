import React from 'react';
import { UserState } from '../../redux/slice/users.slice';
import styles from './UserCard.module.scss';

export default function UserCard(props: UserState) {
  const { age, country, email, photo, sex, username } = props;
  return (
    <div className={styles.user}>
      {username && <div>Name: {username}</div>}
      {photo && <img src={photo} alt="Base64 Image" className={styles.photo} />}
      {age && <div>Age: {age}</div>}
      {country && <div>Country: {country}</div>}
      {email && <div>Email: {email}</div>}
      {sex && <div>Gender: {sex}</div>}
    </div>
  );
}
