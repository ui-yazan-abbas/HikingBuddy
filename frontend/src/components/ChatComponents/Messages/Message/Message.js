import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
            <p className="sentText pr-10">{trimmedName}</p>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundGreen">
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
                <p className="sentText pr-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;