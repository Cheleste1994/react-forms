import { createSlice } from '@reduxjs/toolkit';
import { allCountries } from '../../common/listCountries';

const countriesSlice = createSlice({
  name: 'Countries',
  initialState: allCountries,
  reducers: {},
});

export default countriesSlice.reducer;
