import React from 'react';
import { useAppSelector } from '../../../redux/hooks/hooks';

export default function Autocomplete() {
  const store = useAppSelector((store) => store.countriesReducer);

  return (
    <>
      <input name="country" list="country" required />
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
