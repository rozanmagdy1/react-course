import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProducts, fetchData} from "./Actions/ProductActions";

function ProductComponent() {
    const products = useSelector((state) => state.products);
    const state = useSelector((state) => state);
    console.log(state)
    const dispatch = useDispatch();

    // console.log(products)

    useEffect(()=>{
        dispatch(fetchData())
    },[])


    // console.log(products)

    return (
        <>
            {/*for add product action*/}
            {/*<h1>For Add Products</h1>*/}
            {/*{products.map((product)=>{*/}
            {/*        return <div key={product.id}>*/}
            {/*            {product.name}*/}
            {/*        </div>*/}
            {/*    }*/}
            {/*)}*/}
            {/*<button className='btn btn-info'*/}
            {/*        onClick={()=>{dispatch(addProducts({id:1 , name: "p1"}))}}>Add product</button>*/}


            {/*for get products action*/}
            <h1>For Get Products</h1>
            {products.map((product)=>{
                return <div key={product.id}>{product.title}</div>
            })}


        </>
    );
}

export default ProductComponent;