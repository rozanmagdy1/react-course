import {configureStore} from "@reduxjs/toolkit";
import BankReducer from './slices/BankSlice'
import ProductReducer from './slices/ProductSlice'

export const store = configureStore({
    reducer:{
        bank : BankReducer,
        products : ProductReducer
    },
})