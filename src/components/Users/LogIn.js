import React, {useState} from 'react';
import axios from "axios";

const LogIn = () => {
    const [ data, setData ] = useState({});

    function inputHandler(event){
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    function login(event){
        event.preventDefault()
        axios.post('http://159.89.2.247:8003/api/users/signin/',
            data
        ).then(response => console.log(response))
    }

    return (
        <form onSubmit={login}>
            <input name="username" type="text" onChange={inputHandler} placeholder="Логин"/>
            <input name="password" type="password" onChange={inputHandler} placeholder="Пароль"/>
            <button>Войти</button>
        </form>
    );
};

export default LogIn;