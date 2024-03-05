import * as yup from 'yup';
import { store } from '../redux/store';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const regex = {
  username: /^[A-Z]/,
  password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z\d])/,
};

const countryData = () =>
  store.getState().countriesReducer.map((el) => el.name);

export const schema = yup
  .object({
    username: yup
      .string()
      .matches(regex.username, 'First uppercased letter')
      .required(),
    age: yup
      .number()
      .positive('no negative values')
      .integer('no negative values')
      .required(),
    email: yup.string().email('Please enter a valid email').required(),
    password: yup
      .string()
      .matches(
        regex.password,
        'Password strength: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character'
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    sex: yup.string().required('Gender is a required field'),
    country: yup
      .string()
      .matches(regex.username, 'First uppercased letter')
      .oneOf(countryData(), 'Country not found')
      .required('Country is a required field'),
    rules: yup.boolean().oneOf([true], 'Rules not accepted'),
    photo: yup
      .mixed()
      .required('Required')
      .test({
        message: 'Please provide a supported file type(jpeg or png)',
        test: (value) => {
          if (!value) return true;
          const file = Object.values(value)?.[0];
          if (file && file instanceof File) {
            return file.type === 'image/jpeg' || file.type === 'image/png';
          }
        },
      })
      .test('is-valid-size', 'Max allowed size is 5MB', (value) => {
        if (!value) return true;
        const file = Object.values(value)?.[0];
        if (file && file instanceof File) {
          return file.size <= MAX_FILE_SIZE;
        }
      }),
  })
  .required();

export type FormDataSchema = yup.InferType<typeof schema>;
