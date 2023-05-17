import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deposit, withdraw} from "./slices/BankSlice";

function BankComponent() {
    const bank = useSelector((state)=> state.bank);
    const dispatch = useDispatch();
    return (
        <>
            <p>{bank}</p>
            <button className='btn btn-success mx-5'
                    onClick={()=>{dispatch(withdraw(100))}}>withdraw</button>
            <button className='btn btn-info'
                    onClick={()=>{dispatch(deposit(100))}}
            >deposit</button>

        </>
    );
}

export default BankComponent;