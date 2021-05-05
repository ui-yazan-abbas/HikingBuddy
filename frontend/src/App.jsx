// NPM Packages
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Auth from "./services/Auth";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import EventsPage from "./pages/events/EventsPage";
import ChatPage from "./pages/chat/ChatPage";
import SignUp from "./pages/auth/SignUp";
import UserProfile from "./pages/userProfile/UserProfile";

import Chat from "./components/Chat/chat";
import Join from "./components/Join/join";

//Styling
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import UserApi from "./api/UserApi";

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
  const [userData, setUserData] = useState({});
  // Constants
  Auth.bindLoggedInStateSetter(setLoggedIn);

  //get userData on sign in
  const getUserData = async () => {
    await UserApi.getUser()
      .then((res) => setUserData(res.data))
      .catch((err) => console.error(err));
  };
  // Components
  useEffect(() => {
    const abortFetch = new AbortController();
    getUserData();
    return () => abortFetch.abort();
  }, [loggedIn]);
  console.log("userData", userData);

  const loggedInRouter = (
    <BrowserRouter>
      <Navbar onLogout={() => Auth.logout()} userData={userData} />

      <div className="container mt-5">
        <Switch>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/chat">
            <ChatPage />
          </Route>
          <Route exact path="/posts">
            <PostsPage userData={userData} />
          </Route>
          <Route exact path="/chat">
            <Route path="/chat" exact component={Join} />
            <Route path="/Chat/chat" component={Chat} />
          </Route>

          {/* <Route exact path="/:name/profile">
            <UserProfile userData={userData} match={} />
          </Route> */}
          <Route
            exact
            path="/:name/profile"
            component={(props) => (
              <UserProfile match={props.match} userData={userData} />
            )}
          />
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
