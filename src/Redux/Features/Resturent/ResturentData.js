import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturetrentData: null,
};

export const fetchresturent = createAsyncThunk("resturentSlice",async()=>{
    try {
        const response = await fetch("http://localhost:5000/alldata");
        const data = await response.json();
        return data; // Return the fetched data
      } catch (error) {
        throw error;
      }
})

const resturentSlice = createSlice({
  name: "resturentSlice",
  initialState,
  reducers: {
    addResData: (state, { payload }) => {
      state.resturetrentData = payload;
    },
  },
  extraReducers:{
    [fetchresturent.fulfilled]:(state, action)=>{
        state.resturetrentData = action.payload;
    }
  }
});

export const { addResData } = resturentSlice.actions;
export default resturentSlice.reducer;
