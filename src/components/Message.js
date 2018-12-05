import React from 'react';
import moment from 'moment';

const Message = ({ username, time, message, type }) => (
    <div className={"messages__message" + (type === 'alert' ? '--alert' : '')}>
        <div>
            <span className="messages__username">{username}</span>
            <span className="messages__time">{moment(time).format("h:mm:ss a")}</span>
        </div>
        <p className="messages__text">{message}</p>
    </div>
);

export default Message;