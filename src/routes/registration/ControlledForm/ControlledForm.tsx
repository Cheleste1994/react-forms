import React from 'react';
import { useForm } from 'react-hook-form';
import { FormDataSchema, schema } from '../../../common/schema';

import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../../../components/CustomLabel/CustomLabel.module.scss';

import '../registration.scss';
import Autocomplete from '../../../components/Autocomplete/Controlled/Autocomplete';
import convertPhotoBase64 from '../../../common/convertFileToBase64';
import { addUser } from '../../../redux/slice/user.slice';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';

export default function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormDataSchema>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = async (data: FormDataSchema) => {
    const file = Object.values(data.photo)[0];
    if (file && file instanceof File) {
      const formData = { ...data, photo: await convertPhotoBase64(file) };

      dispatch(addUser(formData));
      navigate('/');
    }
  };

  return (
    <main className="main">
      <h1>Controlled Form</h1>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete={'on'}
      >
        <label htmlFor="username">
          Name
          <input
            {...register('username')}
            aria-invalid={errors.username ? 'true' : 'false'}
          />
          {errors.username && (
            <span className={styles.validation}>
              <span className={styles.message}>First uppercased letter</span>
            </span>
          )}
        </label>
        <label htmlFor="age">
          Age
          <input
            {...register('age')}
            aria-invalid={errors.age ? 'true' : 'false'}
          />
          {errors.age && (
            <span className={styles.validation}>
              <span className={styles.message}>
                Should be number, no negative values
              </span>
            </span>
          )}
        </label>
        <label htmlFor="email">
          Email
          <input
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <span className={styles.validation}>
              <span className={styles.message}>{errors.email.message}</span>
            </span>
          )}
        </label>
        <label htmlFor="password">
          Passwords
          <input
            {...register('password')}
            aria-invalid={errors.password ? 'true' : 'false'}
            type="password"
          />
          {errors.password && (
            <span className={styles.validation}>
              <span className={styles.message}>
                Password strength: 1 number, 1 uppercased letter, 1 lowercased
                letter, 1 special character
              </span>
            </span>
          )}
        </label>
        <label htmlFor="confirmPassword">
          Repeat password
          <input
            {...register('confirmPassword')}
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            type="password"
          />
          {errors.confirmPassword && (
            <span className={styles.validation}>
              <span className={styles.message}>
                {errors.confirmPassword.message}
              </span>
            </span>
          )}
        </label>
        <label htmlFor="sex">
          Gender
          <select
            {...register('sex')}
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
          >
            <option></option>
            <option>Man</option>
            <option>Women</option>
          </select>
          {errors.sex && (
            <span className={styles.validation}>
              <span className={styles.message}>{errors.sex.message}</span>
            </span>
          )}
        </label>
        <label htmlFor="country">
          Select country
          <Autocomplete register={register} />
          {errors.country && (
            <span className={styles.validation}>
              <span className={styles.message}>{errors.country.message}</span>
            </span>
          )}
        </label>
        <label htmlFor="rules">
          Accept T&C
          <input {...register('rules')} type={'checkbox'} />
          {errors.rules && (
            <span className={styles.validation}>
              <span className={styles.message}>{errors.rules.message}</span>
            </span>
          )}
        </label>
        <label htmlFor="photo">
          Upload picture
          <input {...register('photo')} type="file" accept=".jpeg, .png" />
          {errors.photo && (
            <span className={styles.validation}>
              <span className={styles.message}>{errors.photo.message}</span>
            </span>
          )}
        </label>

        <input type="submit" disabled={!isValid} />
      </form>
    </main>
  );
}
