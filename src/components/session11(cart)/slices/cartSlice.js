import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({

    reducers: {
        addToCart: (state, action)=>{
            const findProduct = state.find((product)=> product.id === action.payload.id);
            if(findProduct){
                findProduct.quantity++;
            }else{
                const cloneProduct = {...action.payload , quantity:1}
                state.push(cloneProduct);
            }
        },
        removeFromCart: (state, action)=>{
            return state.filter((product)=> product.id !== action.payload.id);
        },
        clearCart: ()=>{
            return [];
        },
        increaseQuantity: (state,action) =>{
            const findProduct = state.find((product)=> product.id === action.payload.id);
            findProduct.quantity++;
        },
        decreaseQuantity: (state, action)=>{
            const findProduct = state.find((product)=> product.id === action.payload.id);
            if(findProduct.quantity <= 0){
                findProduct.quantity = 0;
            }else{
                findProduct.quantity--;
            }
        },
    }
})

export const {addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;