import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const UserDetails = () => {
    const [ user, setUser ] = useState({});
    const {id} = useParams();

    function getUser(){
        fetch(`http://159.89.2.247:8003/api/users/${id}/`)
            .then(res => res.json())
            .then(data => setUser(data))
    }

    useEffect(getUser, []);

    return (
        <div>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <h2>{user.date_joined}</h2>
        </div>
    );
};

export default UserDetails;