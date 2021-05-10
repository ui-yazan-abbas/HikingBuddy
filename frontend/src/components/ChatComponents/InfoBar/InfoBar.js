import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar2">
    <div className="leftInnerContaineri2">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3> {room} Chat Room</h3>
    </div>
  </div>
);

export default InfoBar;