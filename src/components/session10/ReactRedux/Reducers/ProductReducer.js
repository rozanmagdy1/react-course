import {product_action_type1, product_action_type2} from "../ActionTypes/Products";

export const Product_Reducer = (state = [], action)=>{
    switch (action.type){
        case product_action_type1 :
            return [... state , action.payload];
        case product_action_type2:
            return [... action.payload];
        default:
            return state;
    }
}