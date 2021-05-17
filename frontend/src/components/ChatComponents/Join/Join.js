import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer2">
      <div className="joinInnerContainer2">
        <h1 className="heading2">HIKING BUDDY CHAT</h1>
        <div>
          <input
            placeholder="Chat Nickname"
            className="joinInput2"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {
          <div>
            <input
              placeholder="Event Chat Name"
              className="joinInput2"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
        }
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button2 className={"button2 mt-20"} type="submit">
            Join Chat
          </button2>
        </Link>
      </div>
    </div>
  );
}
