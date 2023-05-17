import React, {useState} from 'react';

function UseState() {
    let [count, setCount] = useState(0);
    let [name, setNAme] = useState('rrr');
    let [car, setCar] = useState({color : 'red', name : 'zzz'})

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "blue" }
        });
    }

    return (
        <>
            <p>{count}</p>
            <p>{name}</p>
            <button onClick={
                ()=>{
                    setCount(21)
                    setNAme('Rozan')
                }
            }>Button</button>

            <p>{car.color}</p>
            <button onClick={updateColor}>change car color</button>

        </>

    );
}

export default UseState;