import React from 'react';
import productsData from "../session3/ProductsData";
import Product from "./Product";
import './Produts.css'

let elements = productsData.map((value)=>{
    // if(value.price > 20){
    //     return <Product key = {value.id} product={value}/>
    // }
    return value.price > 20 ? <Product key = {value.id} product={value}/> : null;
    }
)
function Products() {
    return (
        <div className="Products">
            {elements}
        </div>
    );
}

export default Products;