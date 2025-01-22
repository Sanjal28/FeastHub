import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore=configureStore({
    // main reducer for store
    reducer:{
        // slice reducer
        cart:cartReducer
    }
});

export default appStore;

// redux toolkit