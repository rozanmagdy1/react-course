import React from 'react';
import './product.css'
import {Link} from "react-router-dom";

function Product(props) {
    return (
        <>
            <div className="card product">
                <img src={props.product.image} className="product-img img-fluid" alt="product"/>
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.price}</p>
                    {
                        props.showButton === true &&
                        <Link to={`product/${props.product.id}`} className="btn btn-primary">
                        Details
                        </Link>
                    }

                </div>
            </div>
        </>
    );
}

export default Product;