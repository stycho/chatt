import React from 'react';

const ChatBar = ({ userName, userMessage, handleNameInput, handleMessageInput, handleSubmit }) => (
    <div className="chatbar">
        <div className="container">
            <form onSubmit={handleSubmit} className="chatbar__grid">
                <input
                    className="chatbar__name-input"
                    onChange={handleNameInput}
                    type="text"
                    value={userName}
                    defaultValue={`User${Math.floor(Math.random() * 10000)}`}
                    name="username"
                />
                <input
                    onChange={handleMessageInput}
                    value={userMessage}
                    className="chatbar__text-input"
                    type="text"
                    name="message"
                />
                <input className="chatbar__submit-btn" type="submit" />
            </form>
        </div>
    </div>
);

export default ChatBar;