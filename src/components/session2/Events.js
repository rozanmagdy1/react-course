import React from 'react';

function Events() {

    let func1 = ()=> {
        console.log('click')
    }
    let func2 = ()=> {
        console.log('enter')
    }
    let func3 = ()=> {
        console.log('leave')
    }

    return (
        <>
            <button onClick={func1} onMouseEnter={func2} onMouseLeave={func3}
            >Button</button>
        </>
    );
}

export default Events;