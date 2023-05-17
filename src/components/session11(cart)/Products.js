import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./slices/ProductSlice";
import {addToCart} from "./slices/cartSlice";

function Products() {
    let products = useSelector(state => state.products);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <br/>
            <Container>
                <Row>
                    {
                        products.map((product) => {
                            return <Col key={product.id}>
                                <Card style={{height:'600px',width: '18rem'}}>
                                    <Card.Img style={{height:'300px', width: '100%'}} variant="top" src={product.image}/>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            .{product.description.slice(0,50)}.....
                                        </Card.Text>
                                        <Button variant="success"
                                                onClick={()=>{dispatch(addToCart(product))}}
                                        >Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    );
}

export default Products;