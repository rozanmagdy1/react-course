import {bank_action_type1, bank_action_type2} from "../ActionTypes/Bank";

export const withdraw = (amount)=>{
    return {
        type: bank_action_type1,
        payload:amount
    }
}

export const deposit = (amount)=>{
    return {
        type: bank_action_type2,
        payload:amount
    }
}