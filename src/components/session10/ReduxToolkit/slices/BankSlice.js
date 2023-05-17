import {createSlice} from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name : "bankSlice",
    initialState : 1000,
    reducers : {
        withdraw : (state, action)=>{
            return state - action.payload;
        },
        deposit : (state, action)=>{
            return state + action.payload;
        }
    }
})

export const {withdraw,deposit} = bankSlice.actions;
export default bankSlice.reducer;
