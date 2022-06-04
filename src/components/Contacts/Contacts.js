import React, {useState} from 'react';

const Contacts = ({phoneNumber}) => {

    return (
        <div>
            <h4>Номер: {phoneNumber}</h4>
            <h4>Почта: cat@mail.ru</h4>
        </div>
    );
};

export default Contacts;