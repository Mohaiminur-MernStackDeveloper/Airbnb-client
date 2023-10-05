import { configureStore } from "@reduxjs/toolkit";
import resturentSlice from "../Redux/Features/Resturent/ResturentData"

const store = configureStore({
    reducer:{
        resturentSlice: resturentSlice,
    }
});


export default store;