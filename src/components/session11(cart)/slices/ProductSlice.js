import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('ProductSlice/fetchProducts', async ()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
})

const ProductSlice = createSlice({
    name : "ProductSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export const {} = ProductSlice.actions;
export default ProductSlice.reducer;