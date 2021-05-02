import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./ChatPage.css";
import ChatHome from "./ChatHome/ChatHome";
import ChatRoom from "./ChatRoom/ChatRoom";

function ChatPage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/chat" component={ChatHome} />
        <Route exact path="/:roomId" component={ChatRoom} />
        <Route exact path="/chat" component={ChatHome} />
      </Switch>
    </Router>
  );
}

export default ChatPage;
