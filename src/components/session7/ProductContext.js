import React, {createContext, useState} from 'react';
export const ProductsContext = createContext();

function ProductProvider(props) {
    let [products, setProducts] = useState([{id:1, name:"product1"},{id:2, name:"product2"}]);
    return (
        <>
            <ProductsContext.Provider value = {products}>
                {props.children}
            </ProductsContext.Provider>

        </>
    );
}

export default ProductProvider;