import React, { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormDataSchema } from '../../../common/schema';

import { useAppSelector } from '../../../redux/hooks/hooks';

export default function Autocomplete({
  register,
}: {
  register: UseFormRegister<FormDataSchema>;
}) {
  const [searchCountries, setSearchCountries] = useState('');

  const store = useAppSelector((store) => store.countriesReducer);

  return (
    <>
      <input
        {...register('country', { required: true })}
        value={searchCountries}
        onChange={(e) => setSearchCountries(e.target.value)}
        list="country"
      />
      <datalist id="country">
        {store.map((country, index) => (
          <option key={`${country.code}${index}`} value={country.name}>
            {country.name}
          </option>
        ))}
      </datalist>
    </>
  );
}
