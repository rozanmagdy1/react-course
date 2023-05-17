import React, {useState} from 'react';
import Button from "./Button";

function Input(props) {
    let [value, setValue] = useState('')
    return (
        <>
            <p>{value}</p>
            <label>{props.label}</label>
            <input type={props.type} onChange={(event)=>{
                setValue(event.target.value)
            }}/>
            <button onClick={()=>{
                console.log(value)
            }}
            >Print</button>
        </>
    );
}

export default Input;