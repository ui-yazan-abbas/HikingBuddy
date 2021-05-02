import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ChatHome.css";

const ChatHome = () => {
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/${roomName}`} className="enter-room-button">
        Join room to share your experience with HikerBuddy
      </Link>
    </div>
  );
};

export default ChatHome;
