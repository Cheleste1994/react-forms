import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productsApi from './api/productsApi';
import productReducer from './slice/products.slice';
import countriesReducer from './slice/countries.slice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    productReducer,
    countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
