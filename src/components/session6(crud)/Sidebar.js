import React from 'react';
import './Sidebar.css'
import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <ul className='list-unstyled'>
                <li className='p-5'>
                    <Link to='/products' className='text-decoration-none text-black'>Products</Link>
                </li>
                <li className='p-5'>
                    <Link to='/categories' className='text-decoration-none text-black'>Categories</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;