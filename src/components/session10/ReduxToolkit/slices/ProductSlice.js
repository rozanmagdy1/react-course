import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('ProductSlice/fetchData',async ()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
})

let initialState = {
    products: []
}

export const ProductSlice = createSlice({
    name : "ProductSlice",
    initialState,
    reducers : {
        addProduct : (state, action)=>{
            state.push(action.payload);
        },
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchData.pending, (state, action)=>{
            console.log("pending")
        })
        builder.addCase(fetchData.fulfilled, (state, action)=>{
            state.products = action.payload;
        })
    }
})

export const {addProduct} = ProductSlice.actions;
export default ProductSlice.reducer;