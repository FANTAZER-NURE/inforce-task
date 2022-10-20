import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import commentsSlice from '../features/commentsSlice';
import productsSlice from '../features/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    comments: commentsSlice,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
