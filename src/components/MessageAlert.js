import React from 'react';

const MessageAlert = ({ message }) => (
    <div className="messages__message--alert">
        <span className="messages__username--alert">ChatBot</span>
        <p className="messages__text">{message}</p>
    </div>
);

export default MessageAlert;