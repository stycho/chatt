import React from 'react';
import Message from './Message';

const MessageContainer = (props) => (
    <div className="messages">
        <div className="container">
            <Message
                username="Bob"
                time="10:40am"
                message="hello there. great to see you!"
            />
            <Message
                username="Bob"
                time="10:40am"
                message="hello there. great to see you!"
            />
        </div>
    </div>
);

export default MessageContainer;