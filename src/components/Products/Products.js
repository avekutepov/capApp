import React, {useEffect, useState} from 'react';
import Product from "./Product";

const Products = () => {
    const [ caps, setCaps] = useState([]);

    function getCaps(){
        fetch('http://159.89.2.247:8003/api/caps/')
            .then(res => res.json())
            .then(data => setCaps(data.results))
    }

    useEffect(getCaps,[])

    return (
        <div>
            <h2>Список товаров</h2>
            {caps.map(cap => <Product cap={cap} key={cap.id}/>)}
        </div>
    );
};

export default Products;