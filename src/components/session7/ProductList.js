import React, {useContext} from 'react';
import {ProductsContext} from "./ProductContext";
import {CategoriesContext, PostsContext} from "./CategoryContext";

function ProductList(props) {
    const value1 = useContext(ProductsContext);
    const value2 = useContext(CategoriesContext);
    const value3 = useContext(PostsContext);
    return (
        <>
           <div>
               {value1[0].id}
           </div>
            <div>
                {value2[0].name}
            </div>
            <div>
                {value3.name}
            </div>
        </>
    );
}

export default ProductList;