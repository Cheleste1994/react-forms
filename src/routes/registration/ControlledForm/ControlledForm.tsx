import React from 'react';
import { useForm } from 'react-hook-form';
import { FormDataSchema, schema } from '../../../common/schema';

import { yupResolver } from '@hookform/resolvers/yup';

import '../registration.scss';
import Autocomplete from '../../../components/Autocomplete/Controlled/Autocomplete';
import convertPhotoBase64 from '../../../common/convertFileToBase64';
import { addUser } from '../../../redux/slice/users.slice';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { useNavigate } from 'react-router-dom';
import CustomLabel from '../../../components/CustomLabel/Controlled/CustomLabel';

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
        <CustomLabel
          name={'username'}
          labelText={'Name'}
          register={register}
          key="username"
          errors={errors}
        />
        <CustomLabel
          name={'age'}
          labelText={'Age'}
          register={register}
          key="age"
          errors={errors}
        />
        <CustomLabel
          name={'email'}
          labelText={'Email'}
          register={register}
          key="email"
          errors={errors}
        />
        <CustomLabel
          name={'password'}
          labelText={'Passwords'}
          register={register}
          key="password"
          errors={errors}
          type="password"
        />
        <CustomLabel
          name={'confirmPassword'}
          labelText={'Repeat password'}
          register={register}
          key="confirmPassword"
          errors={errors}
          type="password"
        />
        <CustomLabel
          name={'sex'}
          labelText={'Gender'}
          register={register}
          key="sex"
          errors={errors}
        >
          <select
            {...register('sex')}
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
          >
            <option></option>
            <option>Man</option>
            <option>Women</option>
          </select>
        </CustomLabel>
        <CustomLabel
          name={'country'}
          labelText={'Select country'}
          register={register}
          key="country"
          errors={errors}
        >
          <Autocomplete register={register} />
        </CustomLabel>
        <CustomLabel
          name={'rules'}
          labelText={'Accept T&C'}
          register={register}
          key="rules"
          errors={errors}
          type="checkbox"
        />
        <CustomLabel
          name={'photo'}
          labelText={'Upload picture'}
          register={register}
          key="photo"
          errors={errors}
          type="file"
        />

        <input type="submit" disabled={!isValid} />
      </form>
    </main>
  );
}
