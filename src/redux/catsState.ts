import { createSlice } from '@reduxjs/toolkit';

export interface Cat {
  name: string,
  description: string,
}

export interface CatsState {
  isLoading: boolean,
  data: Cat[]
}
const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
    getCatsFetch: (state: CatsState) => {
      state.isLoading = true,
      state.data = []
    },
    getCatsSuccess: (state: CatsState, action) => {
      state.isLoading = false,
      state.data = action.payload
    },
    getCatsFailure: (state: CatsState, ) => {
      state.isLoading = false
    }
  }
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catsSlice.actions;

export const catsReducer = catsSlice.reducer;
