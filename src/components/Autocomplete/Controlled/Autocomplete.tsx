import React, { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks/hooks';
import styles from '../Autocomplete.module.scss';

export default function Autocomplete() {
  const [searchCountries, setSearchCountries] = useState('');

  const store = useAppSelector((store) => store.countriesReducer);

  const countries = store.filter((country) =>
    country.name.toLowerCase().includes(searchCountries.toLowerCase())
  );
  return (
    <>
      <input
        name="country"
        id="country"
        value={searchCountries}
        onChange={(e) => setSearchCountries(e.target.value)}
      />
      <div
        className={styles.autocomplete}
        style={{
          visibility:
            searchCountries && searchCountries !== countries[0]?.name
              ? 'visible'
              : 'hidden',
        }}
      >
        {(countries.length > 0 &&
          countries.map((el, index) => (
            <div
              key={`${el.code}${index}`}
              onClick={() => setSearchCountries(el.name)}
            >
              <span>+{el.code}</span>
              <span>{el.name}</span>
            </div>
          ))) ||
          (searchCountries && (
            <div>
              <span>Not found!</span>
            </div>
          ))}
      </div>
    </>
  );
}
