import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Product from "../session5/ProductComponent/Product";

function ProductInfo() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const api_url = "http://fakestoreapi.com/products";
    useEffect(()=>{
        fetch(`${api_url}/${params.productID}`).then((response)=> response.json())
            .then((data)=> setProduct(data))
    },[]);
    return (
        <>
            <Product product ={product} showButton={false}/>
        </>
    );
}

export default ProductInfo;