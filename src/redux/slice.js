import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'token',
  initialState: {
      value: []
  },
  reducers: {
    storeToken: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const {storeToken} = slice.actions;
export default slice.reducer; 