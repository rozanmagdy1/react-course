import React from 'react';
import {useState} from "react";
import {createContext} from "react";

export const CategoriesContext = createContext();
export const PostsContext = createContext();

function CategoryProvider(props) {
    let [categories, setCategories] = useState([{id:1, name:"cat1"},{id:2, name:"cat2"}]);
    let [posts, setPosts] =useState({name:"post1"})
    return (
        <>
            <PostsContext.Provider value={posts}>
                <CategoriesContext.Provider value = {categories}>
                    {props.children}
                </CategoriesContext.Provider>
            </PostsContext.Provider>
        </>
    );
}

export default CategoryProvider;