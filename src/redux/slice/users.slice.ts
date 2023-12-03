import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  username: string;
  age: string;
  email: string;
  password: string;
  sex: string;
  photo: string;
  country: string;
  rules: boolean;
  id: number;
}

const initialState: UserState[] = [];

const usersSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addUser: (state, action) => [
      ...state,
      { ...action.payload, id: state[state.length - 1]?.id + 1 || 1 },
    ],
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
