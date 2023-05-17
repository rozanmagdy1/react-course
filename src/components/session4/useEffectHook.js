import React, {useEffect, useState} from 'react';

function UseEffectHook() {
    let [number, setNumber] = useState(0);
    let [counter, setCounter] = useState(0)

    //simulate of componentDidMount()
    // useEffect(()=>{
    //     setCar(car+1)
    // },[])

    //simulate of componentDidUpdate()
    useEffect(()=>{
        setNumber(number+1);
        return ()=>{console.log("unmount")};
    },[counter])

    let changeCount = ()=>{
        setCounter(counter + 1);
    }

    return (
        <div>
            {number}
            <br/>
            <button onClick={changeCount}>change</button>
        </div>
    );
}

export default UseEffectHook;