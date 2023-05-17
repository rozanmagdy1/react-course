import React from 'react';

function Loops(props) {
    let arr = ['javascript','html','css'];
    //outside return
    // let ele = arr.map((value)=>{
    //     return <p>{value}</p>;
    // })

    return (
        <div>
            {/*outside the return*/}
            {/*{ele}*/}

            {/*inside return*/}
            {arr.map((value,index)=><p key={index}>{value}</p>)}

        </div>
    );
}

export default Loops;