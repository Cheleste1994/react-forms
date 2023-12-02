import { store } from '../redux/store';
import convertPhotoBase64 from './convertFileToBase64';

type ValueForm = FormDataEntryValue | null;

const regex = {
  username: /^[A-Z]/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z\d])/,
};

export const checkValidationUsername = (username: ValueForm): string | null => {
  if (typeof username === 'string' && regex.username.test(username)) {
    return username;
  }
  return null;
};

export const checkValidationAge = (age: ValueForm): string | null => {
  if (typeof age === 'string' && Number(age) > 0) {
    return age;
  }
  return null;
};

export const checkValidationEmail = (email: ValueForm): string | null => {
  if (typeof email === 'string' && regex.email.test(email)) {
    return email;
  }
  return null;
};

export const checkValidationPassword = (
  password: ValueForm,
  repeatPassword: ValueForm
): string | null => {
  if (
    typeof password === 'string' &&
    password === repeatPassword &&
    regex.password.test(password)
  ) {
    return password;
  }
  return null;
};

export const checkValidationPhoto = async (
  photo: ValueForm
): Promise<string | null> => {
  if (photo instanceof File) {
    const { type, size } = photo;
    if (
      (type !== 'image/jpeg' && type !== 'image/png') ||
      size > 5 * 1024 * 1024
    ) {
      return null;
    }
    const data = await convertPhotoBase64(photo);
    return data;
  }
  return null;
};

export const checkValidationCountry = (value: ValueForm): string | null => {
  if (typeof value === 'string') {
    const countries = store
      .getState()
      .countriesReducer.some(
        (country) => country.name.toLowerCase() === value.toLowerCase()
      );

    if (countries) {
      return value;
    }
  }
  return null;
};
