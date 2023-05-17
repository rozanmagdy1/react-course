import React from 'react';
import Table from 'react-bootstrap/Table';
import {useDispatch, useSelector} from "react-redux";
import {Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {clearCart, decreaseQuantity, increaseQuantity, removeFromCart} from "./slices/cartSlice";

function Cart() {
    let cart = useSelector((state) => state.cart);
    let dispatch = useDispatch();
    let total_price = cart.reduce((acc, item) => {
        acc += (item.price) * (item.quantity);
        return acc;
    }, 0)


    return (
        <>
            <div>
                <p>Total Price : {total_price.toFixed(2)}$</p>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map((item) => {
                            return <tr key={item.id}>
                                <td>{item.title.slice(0, 20)}</td>
                                <td>
                                    <Image src={item.image}
                                           alt={item.title}
                                           style={{width: "100px"}}
                                    />
                                </td>
                                <td>{item.price} $</td>
                                <td>
                                    <Button
                                        variant="outline-danger"
                                        onClick={() => {
                                            dispatch(increaseQuantity(item))
                                        }}>+</Button>
                                    {item.quantity}
                                    <Button
                                        variant="outline-danger"
                                        onClick={() => {
                                            dispatch(decreaseQuantity(item))
                                        }}>-</Button>
                                </td>
                                <td>
                                    <Button onClick={() => {
                                        dispatch(removeFromCart(item))
                                    }}>
                                        delete
                                    </Button>
                                </td>
                            </tr>

                        })
                    }
                    </tbody>
                </Table>
                <Button onClick={() => {
                    dispatch(clearCart())
                }}>Clear</Button>
            </div>
        </>


    );
}

export default Cart;