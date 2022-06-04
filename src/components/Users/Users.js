import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {
    const [ users, setUsers] = useState([]);

    function getUsers(){
        fetch(`http://159.89.2.247:8003/api/users/`)
            .then(res => res.json())
            .then(data => setUsers(data.results))
    }

    useEffect(getUsers,[]);

    return (
        <div>
            <h2>Пользователи</h2>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;