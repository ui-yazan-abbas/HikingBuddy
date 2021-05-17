import React from "react";

import onlineIcon from "../icons/onlineIcon.png";

import "./InfoBar.css";

import {
  
  Container,
  Segment,
  
  Grid,
} from "semantic-ui-react";

const InfoBar = ({ room }) => (
  
  <div className="infoBar2">
    <div className="leftInnerContaineri2">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3> Chat Room "{room}" </h3>
    </div>
  </div>
  
);

export default InfoBar;
