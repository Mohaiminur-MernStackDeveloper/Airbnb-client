import { configureStore } from "@reduxjs/toolkit";
import ResturentData from "./Features/Resturent/ResturentData";

const store = configureStore({
    reducer:{
        ResturentDataall: ResturentData,
    }
});



export default store;