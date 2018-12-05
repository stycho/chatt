import React from 'react';
import Message from './Message';
import MessageAlert from './MessageAlert';

const MessageContainer = (props) => {
    // Map messages into JSX element
    let messages;
    console.log(props.messages)
    if (props.messages.length > 0) {
        messages =  props.messages.map(({ username, message, id, time, type }) => {
            if (type === 'message') {
                return <Message username={username} message={message} time={time} type={type} key={id}  />;
            } else if (type === 'alert') {
                return <MessageAlert message={message} key={id} />;
            }
        });
    }

    return (
        <div className="messages">
            <div className="container">
                {messages}
            </div>
        </div>
    );
};

export default MessageContainer;