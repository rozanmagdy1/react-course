import React from 'react';
import {useRecoilState} from "recoil";
import ProductAtom from "./Products-atom";

function ProductListForAtoms(props) {
    const [products, setProducts] = useRecoilState(ProductAtom);
    console.log(products)
    return (
        <>
            {products.name}
        </>
    );
}

export default ProductListForAtoms;