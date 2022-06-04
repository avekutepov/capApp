import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <h2><Link to={`/users/${user.id}`}>{user.username}</Link></h2>
        </div>
    );
};

export default User;