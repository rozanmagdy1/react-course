import React, {useEffect, useState} from 'react';
import Product from "../ProductComponent/Product";
import './Products.css';

function Products() {
    const api_url = "http://fakestoreapi.com/products";
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([]);

    const getAPIProductData =()=>{
        fetch(api_url).then((response)=> response.json())
            .then((data)=> setProductList(data))
    }

    const getCategories = ()=>{
        fetch(`${api_url}/categories`).then((response)=> response.json())
            .then((data)=>setCategories(data))
    }

    const getProductsInCategory = (catName)=>{
        fetch(`${api_url}/category/${catName}`).then((response)=> response.json())
            .then((data)=>setProductList(data))
    }

    useEffect(()=>{
        getAPIProductData();
        getCategories();
    }, [])

    return (
        <>
            <h1 className='text-center titles'>Our Products</h1>

            <div className='container'>
                <button className='btn btn-danger me-3'
                        onClick={()=>{getAPIProductData()}}
                >All</button>
                {
                    categories.map((cat)=>
                         <button key={cat}
                                 className='btn btn-danger me-3'
                                 onClick={()=>{getProductsInCategory(cat)}}
                         >{cat}</button>
                    )
                }
            </div><br/>

            <div className= 'container'>
                <div className='row'>
                    {productList.map((value)=>
                        <div className='col' key={value.id}>
                            <Product product = {value} showButton = {true}/>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}

export default Products;