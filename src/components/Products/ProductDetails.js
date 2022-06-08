import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [ cap, setCap] = useState({});
    const [ loading, setLoading ] = useState(true);
    const {id} = useParams()

    function getCap(){
        fetch(`http://159.89.2.247:8003/api/caps/${id}/`)
            .then(res => res.json())
            .then(data => setCap(data))
        axios.get(`http://159.89.2.247:8003/api/caps/${id}/`)
            .then(response => {
                console.log(response.data)
                setLoading(false)
            })
    }
    
    useEffect(getCap,[]);
    if(loading){return <div>ЗАГРУЗКА...</div>}
    else {
    return (
        <div>
            <h3>{cap.name}</h3>
            <h3>{cap.price}</h3>
            <h3>{cap.description}</h3>
            <div><img src={cap.capsimage[0].photo} alt="rewrtew"/></div>
        </div>
    );
}}

export default ProductDetails;