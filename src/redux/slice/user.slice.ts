import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  username: string | null;
  age: string | null;
  email: string | null;
  password: string | null;
  sex: string | null;
  photo: string | null;
  country: string | null;
  rules: boolean | null;
}

const initialState: UserState = {
  username: null,
  age: null,
  email: null,
  password: null,
  sex: null,
  photo: null,
  country: null,
  rules: null,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addUser: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
