import React from 'react';

function CardWithChilds(props) {
    return (
        <>
            <h1>card</h1>
            {props.children}
        </>
    );
}
CardWithChilds.Title = ()=>{
    return(
        <p>Card Title</p>
    )
}

CardWithChilds.Body= ()=>{
    return(
        <p>Card Body</p>
    )
}

export default CardWithChilds;