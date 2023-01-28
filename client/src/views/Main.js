import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res => setProduct(res.data.productos))
    }, []);

    return (
        <div>
            <ProductForm />
            <hr/>
            <ProductList product={product} />
        </div>
    )
}

export default Main;