import React from "react";

import onlineIcon from "../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer2">
    {users ? (
      <div>
        <div className="bar2">
          <h1>Users Online:</h1>
        </div>
        <div className="activeContainer2">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem2">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
