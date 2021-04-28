// NPM Packages
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Project files
import Auth from "./services/Auth";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import ChatPage from "./pages/chat/ChatPage";
import SignUp from "./pages/auth/SignUp";
import UserProfile from "./pages/userProfile/UserProfile";
//Styling
import "./App.css";
import "semantic-ui-css/semantic.min.css";

async function register(registrationData) {
  const registerSuccess = await Auth.register(registrationData);
  if (!registerSuccess) {
    alert("Couldn't register check credentials and try again");
  }
}

async function login(loginData) {
  const loginSuccess = await Auth.login(loginData);
  if (!loginSuccess) {
    alert("Invalid credentials");
  }
}

export default function App() {
  // State
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  // Constants
  Auth.bindLoggedInStateSetter(setLoggedIn);

  // Components
  const loggedInRouter = (
    <BrowserRouter>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/posts">
            <PostsPage />
          </Route>
          <Route exact path="/chat">
            <ChatPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

  const notLoggedInRouter = (
    <BrowserRouter>
      <div className="container mt-5">
        <Switch>
          <Route path="/signup">
            <SignUp onSubmite={register} />
          </Route>
          <Route path="/login">
            <Login onSubmit={login} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );

  return loggedIn ? loggedInRouter : notLoggedInRouter;
}
