import React from 'react';

const Message = ({ username, time, message }) => (
    <div className="messages__message">
        <div>
            <span className="messages__username">{username}</span>
            <span className="messages__time">{time}</span>
        </div>
        <p className="messages__text">{message}</p>
    </div>
);

export default Message;