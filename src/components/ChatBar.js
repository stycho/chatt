import React from 'react';

const ChatBar = (props) => (
    <div className="chatbar">
        <form>
            <input className="chatbar__name-input" type="text"></input>
            <input className="chatbar__text-input" type="text"></input>
            <input className="chatbar__submit-btn" type="submit"></input>
        </form>
    </div>
);

export default ChatBar;