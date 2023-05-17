import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from './slices/ProductSlice'
import CartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer:{
        "products": ProductSlice,
        "cart" : CartSlice,
    }
})