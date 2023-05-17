import React, {useState} from 'react';

function ConditionalRendering(props) {
    let [isLogged, changeIsLogged] = useState(false);

    /**by if condition**/
    // let elem = <p>Login</p>
    // if(isLogged === true){
    //     elem = <p>welcome {props.name}</p>
    // }

    /**by ternary operator outside**/
    // let ele = isLogged? <p>Welcome{props.name}</p> : <p>Please login</p>;
    let func = ()=>{
        changeIsLogged(true)
    }

    return (
        <div>
            {/*by if condition*/}
            {/*{elem}*/}

            {/*by ternary operator inside*/}
            {/*{isLogged?<p>welcome {props.name}</p> : <p>Login</p>}*/}

            {/*by ternary operator outside*/}
            {/*{ele}*/}

            {/*by embed expression*/}
            {/*{*/}
            {/*    isLogged &&*/}
            {/*    <p>Welcome {props.name} </p>*/}

            {/*}*/}

            {/*use null*/}
            {isLogged?<p>welcome {props.name}</p> : null}
            <button onClick={func}>Login</button>
        </div>
    );
}

export default ConditionalRendering;