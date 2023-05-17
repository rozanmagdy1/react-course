import Button from "./Button";

function Product(props) {
    let path = "../logo192.png";
    return(
        <>
            <img src={path} alt="img"/>
            <p>  title {props.title}</p>
            <p>  price {props.price}</p>
            <p>
                count {props.count}<br/>
                <Button title = "Add to Cart" type = "submit"/>
            </p>

        </>
    )
}
export default Product;