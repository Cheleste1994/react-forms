import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  checkValidationUsername,
  checkValidationAge,
  checkValidationEmail,
  checkValidationPassword,
  checkValidationPhoto,
  checkValidationCountry,
} from '../../../common/validationForm';
import Autocomplete from '../../../components/Autocomplete/Uncontrolled/Autocomplete';
import CustomLabel from '../../../components/CustomLabel/CustomLabel';
import { useAppDispatch } from '../../../redux/hooks/hooks';
import { addUser } from '../../../redux/slice/users.slice';
import { IFormData } from '../../../types/formData';
import '../registration.scss';

export default function UncontrolledForm() {
  const [validData, setValidData] = useState<{
    isSubmit: boolean;
    formData: IFormData;
  }>({
    isSubmit: false,
    formData: {
      username: null,
      age: null,
      email: null,
      password: null,
      sex: null,
      rules: null,
      photo: null,
      country: null,
    },
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const objData = {
      username: checkValidationUsername(formData.get('username')),
      age: checkValidationAge(formData.get('age')),
      email: checkValidationEmail(formData.get('email')),
      password: checkValidationPassword(
        formData.get('new-password'),
        formData.get('repeat-password')
      ),
      sex: formData.get('sex') as string,
      rules: !!formData.get('rules'),
      photo: await checkValidationPhoto(formData.get('photo')),
      country: checkValidationCountry(formData.get('country')),
    };
    setValidData({ isSubmit: true, formData: { ...objData } });

    const valuesForm = Object.values(objData);

    if (valuesForm.filter((el) => el).length === valuesForm.length) {
      dispatch(addUser(objData));
      navigate('/');
    }
  };

  return (
    <main className="main">
      <h1>Uncontrolled Form</h1>
      <form className="form" onSubmit={handleSubmit} autoComplete={'on'}>
        <CustomLabel
          name={'username'}
          labelText={'Name'}
          isValid={Boolean(validData.formData.username)}
          isSubmit={validData.isSubmit}
          validMessage={'First uppercased letter'}
        />
        <CustomLabel
          name={'age'}
          labelText={'Age'}
          isValid={Boolean(validData.formData.age)}
          isSubmit={validData.isSubmit}
          validMessage={'Should be number, no negative values'}
        />
        <CustomLabel
          name={'email'}
          labelText={'Email'}
          isValid={Boolean(validData.formData.email)}
          isSubmit={validData.isSubmit}
          validMessage={'Not correct email'}
        />
        <CustomLabel
          name={'new-password'}
          labelText={'Passwords'}
          isValid={Boolean(validData.formData.password)}
          isSubmit={validData.isSubmit}
          validMessage={
            'Password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
          }
        >
          <input type={'password'} name="new-password" required />
          Repeat password
          <input type={'password'} name="repeat-password" required />
        </CustomLabel>
        <CustomLabel
          name={'sex'}
          labelText={'Gender'}
          isValid={Boolean(validData.formData.password)}
          isSubmit={validData.isSubmit}
          validMessage={''}
        >
          <select name="sex" id="sex" required>
            <option></option>
            <option>Man</option>
            <option>Women</option>
          </select>
        </CustomLabel>
        <CustomLabel
          name={'country'}
          labelText={'Select country'}
          isValid={Boolean(validData.formData.country)}
          isSubmit={validData.isSubmit}
          validMessage={'Country not found'}
        >
          <Autocomplete />
        </CustomLabel>
        <CustomLabel
          name={'rules'}
          labelText={'Accept T&C:'}
          isValid={Boolean(validData.formData.email)}
          isSubmit={validData.isSubmit}
          validMessage={''}
          type={'checkbox'}
        />
        <CustomLabel
          name={'photo'}
          labelText={'Upload picture'}
          isValid={Boolean(validData.formData.photo)}
          isSubmit={validData.isSubmit}
          validMessage={'png jpeg no more than 5mb'}
        >
          <input
            name="photo"
            id="photo"
            type="file"
            accept=".jpeg, .png"
            required
          />
        </CustomLabel>

        <input type="submit" />
      </form>
    </main>
  );
}
