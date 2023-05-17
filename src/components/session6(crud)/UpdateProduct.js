import React,{useState,useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function UpdateProduct() {
    const api_url = "http://localhost:9000/products";
    let [product, setProduct] = useState({});
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let navigate = useNavigate ()

    const params = useParams();

    function updateProduct() {
        axios.put(`${api_url}/${params.id}`,{title,price,}).then(()=>{
                swal({
                    title : "Are you want to go to products page?",
                    buttons: true,
                }).then((data)=>{
                    if(data === true){
                        navigate('/products')
                    }
                })
        })  
    }

    let getProductById = ()=>{
        fetch(`${api_url}/${params.id}`).then((res)=>res.json())
            .then((data)=>{
                setProduct(data);
                setTitle(data.title);
                setPrice(data.price);
            })
    }

    useEffect(()=>{
        getProductById()
    },[])

    let form_submit = (e)=>{
        e.preventDefault();
        updateProduct();
    }

    return (
        <>
            {
                product &&
                <form onSubmit={form_submit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="productTitle"
                            defaultValue= {product.title}
                            name= "data"
                            onChange={(e)=> setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">price</label>
                        <input type="text"
                               className="form-control"
                               id="productPrice"
                               name= "data"
                               defaultValue={product.price}
                               onChange={(e)=> setPrice(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success">Edit</button>
                </form>
            }

        </>

    );
}

export default UpdateProduct;