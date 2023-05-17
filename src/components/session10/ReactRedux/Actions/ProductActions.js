import {product_action_type1, product_action_type2} from "../ActionTypes/Products";

export const addProducts = (amount)=>{
    return {
        type: product_action_type1,
        payload: amount
    }
}

export const getProducts = (amount)=>{
    return {
        type: product_action_type2,
        payload: amount
    }
}

export function fetchData(){
    return async (dispatch)=>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        dispatch(getProducts(data));
    }
}
