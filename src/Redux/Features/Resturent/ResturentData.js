import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    resturetrentData : null,
}

const resturentSlice = createSlice({
    name: "resturentData",
    initialState,
    reducers:{
        addResData: (state,{payload})=>{
            state.resturetrentData = payload;
        }
    },
});

export const {addResData} = resturentSlice.actions;
export default resturentSlice.reducer;