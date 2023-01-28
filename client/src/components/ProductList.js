import React from 'react';
import { Link } from "react-router-dom";

const ProductList = (props) => {

    return (
        <div className='center'>
            <h1>All Products:</h1>
            <ul>
                {props.product.map((p, idx)=>{
                    return (
                            <li key={idx}>
                                <Link className="space" to={"/"+ p._id }>{p.title}</Link>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductList;