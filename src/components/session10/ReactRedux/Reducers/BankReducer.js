import {bank_action_type1, bank_action_type2} from "../ActionTypes/Bank";

export const bank_reducer = (state =1000, action)=>{
    switch (action.type){
        case bank_action_type1 :
            return state - 100;
        case bank_action_type2:
            return state + 100;
        default:
            return state;
    }

}