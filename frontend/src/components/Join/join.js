import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Chat Buddy</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <Link to="/Chat/chat" onClick={e => (!name) ? e.preventDefault() : null} >
          <button className={'button mt-20'} type="submit">Enter Chat Room</button>
        </Link>
      </div>
    </div>
  );
}