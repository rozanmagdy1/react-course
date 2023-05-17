import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function ProductDetails() {
    const api_url = "http://localhost:9000/products";
    let [product, setProduct] = useState({});
    const params = useParams();

    useEffect(()=>{
        fetch(`${api_url}/${params.id}`).then((res)=>res.json()).then((data)=> setProduct(data));
    },[])

    return (
        <>
            { product &&
                    <div>
                        <h2 className='text-center text-bg-success'>{product.title}</h2>
                        <img src={product.image} width='500px' height='500px'/>
                        <p>{product.description}</p>
                    </div>
            }

        </>
    );
}

export default ProductDetails;