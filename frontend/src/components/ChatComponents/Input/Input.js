import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form2 className="form">
    <input
      className="inputp2"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button2 className="sendButton" onClick={(e) => sendMessage(e)}>
      SEND
    </button2>
  </form2>
);

export default Input;
