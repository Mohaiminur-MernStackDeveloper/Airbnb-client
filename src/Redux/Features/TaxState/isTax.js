import { createSlice } from "@reduxjs/toolkit";

const isTax = createSlice({
  name: "isTax",
  initialState: {
    tax: false,
  },
  reducers: {
    changestate: (state, {payload}) => {
      state.tax = payload;
    },
  },
});

export default isTax.reducer;
export const {changestate} = isTax.actions;
