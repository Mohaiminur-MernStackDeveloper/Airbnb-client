import { configureStore } from "@reduxjs/toolkit";
import resturentSlice from "../Redux/Features/Resturent/ResturentData"
import isTax from "./Features/TaxState/isTax";

const store = configureStore({
    reducer:{
        resturentSlice: resturentSlice,
        isTax: isTax,
    }
});


export default store;