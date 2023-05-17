import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import swal from 'sweetalert';


function Products() {
    let [products, setProducts] = useState([]);
    const api_url = "http://localhost:9000/products";

    let getAllProducts = () => {
        fetch(api_url).then((response) => response.json()).then((data) => setProducts(data))
    }

    let deleteProduct = (product_id) => {
        swal({
            title: "Are you sure to delete that item ?",
            buttons: true,
        }).then((data) => {
            if (data === true) {
                fetch(`${api_url}/${product_id}`, {
                    method: "DELETE",
                }).then((res) => res.json()).then(() => {
                    getAllProducts()
                })
            }
        })
    }
    useEffect(() => {
        getAllProducts()
    }, []);

    return (
        <>
            <Link to='/products/add' className='btn btn-sm btn-success mt-5'>Add product</Link>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ProductID</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">operations</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/products/edit/${product.id}`}
                                          className='btn btn-danger btn-sm'>Edit</Link>
                                    <button className='btn btn-warning btn-sm'
                                            onClick={() => deleteProduct(product.id)}>Delete
                                    </button>
                                    <Link to={`/products/${product.id}`} className='btn btn-info btn-sm'>View</Link>
                                </td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </>
    );
}

export default Products;
