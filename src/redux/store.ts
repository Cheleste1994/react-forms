import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import countriesReducer from './slice/countries.slice';
import usersReducer from './slice/users.slice';

export const store = configureStore({
  reducer: {
    countriesReducer,
    usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
