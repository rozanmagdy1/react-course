import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deposit, withdraw} from "./Actions/BankActions";

function BankComponent() {
    const state = useSelector((state) => state.bank);
    const dispatch = useDispatch();
    return (
        <>
            <p>{state}</p>
            <button className='btn btn-success'
                    onClick={()=>{dispatch(withdraw(100))}}>Withdraw</button>
            <button className='btn btn-danger mx-5'
                    onClick={()=>{dispatch(deposit(100))}}>Deposit</button>
        </>
    );
}

export default BankComponent;