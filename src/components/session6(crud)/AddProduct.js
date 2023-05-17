import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import swal from 'sweetalert';

function AddProduct() {
    const api_url = "http://localhost:9000/products";
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState("");
    let navigate = useNavigate ()

    let addProduct = ()=>{
        fetch(api_url,
            {
                method : "POST",
                headers : {
                    "Content-Type" : "Application/json"
                },
                body : JSON.stringify({
                    title,
                    price
                }),
            }).then((res)=>res.json()).then(()=>{
            swal({
                title : "Are you want to go to products page?",
                buttons: true,
            }).then((data)=>{
                if(data === true){
                    navigate('/products')
                }
            })
        });
    }

    let form_submit = (e)=>{
        const form = e.target;
        e.preventDefault();
        addProduct();
        form.reset();
    }

    return (
        <>
            <form onSubmit={form_submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productTitle"
                        onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">price</label>
                    <input type="text"
                           className="form-control"
                           id="productPrice"
                           onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </>
    );
}

export default AddProduct;