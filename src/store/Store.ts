import { configureStore } from '@reduxjs/toolkit';
import dataReducer, { DataState } from './dataSlice';

export interface RootState {
  data: DataState;
}

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
