import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const ProductDetails = () => {
    const [ cap, setCap] = useState({});
    const {id} = useParams()

    function getCap(){
        fetch(`http://159.89.2.247:8003/api/caps/${id}/`)
            .then(res => res.json())
            .then(data => setCap(data))
    }

    useEffect(getCap,[]);

    return (
        <div>
            <h3>{cap.name}</h3>
            <h3>{cap.price}</h3>
            <h3>{cap.description}</h3>
        </div>
    );
};

export default ProductDetails;