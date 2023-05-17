import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addProduct, fetchData} from "./slices/ProductSlice";


function ProductComponent() {
    const products = useSelector(state=> state.products.products);
    const dispatch = useDispatch();

    console.log(products)

    useEffect(()=>{
        dispatch(fetchData())
    },[])


    return (
        <>
            <h1>Products</h1>
            {/* {*/}
            {/*    products.map((product)=>{*/}
            {/*    return <div key={product.id}>*/}
            {/*        {product.title}*/}
            {/*    </div>*/}
            {/*})*/}
            {/*}*/}
            {/*<button onClick={()=>{dispatch(addProduct({id:100, title: "jjj"}))}}*/}
            {/*>Add Product</button>*/}
        </>
    );
}

export default ProductComponent;