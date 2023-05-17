import React, {useState} from 'react';

function Timer(props) {
    let d = new Date()
    let [time, setTime] = useState(d);
    function timeChange(){
        setInterval(()=>{
            setTime(d)
        },1000)
    }
    return (
        <>
            <p>{time}</p>
            <p>{timeChange}</p>
        </>
    );
}

export default Timer;