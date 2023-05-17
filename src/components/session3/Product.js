import React from 'react';
import './Product.css'

function Product(props) {
    return (
        <div className="product">
            <h3>{props.product.title}</h3>
            <img src={props.product.image} alt="product"/>
            <p>Rate {props.product.rating.rate}</p>
            <p>Price {props.product.price}</p>
        </div>
    );
}

export default Product;