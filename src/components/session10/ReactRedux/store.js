import {applyMiddleware, combineReducers, createStore} from "redux";
import {bank_reducer} from "./Reducers/BankReducer";
import {Product_Reducer} from "./Reducers/ProductReducer";
import thunk from "redux-thunk";

const appReducer = combineReducers({
    bank: bank_reducer,
    products: Product_Reducer,
})
export const store = createStore(appReducer, applyMiddleware(thunk));