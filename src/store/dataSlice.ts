import { createSlice } from '@reduxjs/toolkit';
import StorageService from '@/services/StorageService';
import { IPerson } from '@/components/PersonCard/types';

const STORAGE_SERVICE = new StorageService();

export interface DataState {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPerson[];
  };
  isLoad: boolean;
  page: number;
  isNetworkError: boolean;
  isOpen: boolean;
  input: string;
}

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
    isLoad: true,
    page: 1,
    isNetworkError: false,
    isOpen: false,
    input: STORAGE_SERVICE.getSearchData() || '',
  } as DataState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsLoad: (state, action) => {
      state.isLoad = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setIsNetworkError: (state, action) => {
      state.isNetworkError = action.payload;
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { setData, setIsLoad, setPage, setIsNetworkError, setOpen, setInput } =
  dataSlice.actions;

export default dataSlice.reducer;
