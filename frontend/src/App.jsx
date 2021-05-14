// NPM Packages
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Auth from "./services/Auth";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import EventsPage from "./pages/events/EventsPage";
import SignUp from "./pages/auth/SignUp";
import UserProfile from "./pages/userProfile/UserProfile";
import Chat from "./components/ChatComponents/Chat/Chat";
import ChatPage from "./components/ChatComponents/Join/Join";
import UserApi from "./api/UserApi";
import { useAuth0 } from "@auth0/auth0-react";

//Styling
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import FollowerList from "./pages/userProfile/FollowerList";
import UsersPosts from "./pages/userProfile/usersPosts";

export default function App() {
  const { user, isAuthenticated } = useAuth0();
  // State
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  const [currentUser, setcurrentUser] = useState({});
  // Constants
  Auth.bindLoggedInStateSetter(setLoggedIn);

  //get currentUser on sign in
  const getcurrentUser = async () => {
    await UserApi.getUser()
      .then((res) => setcurrentUser(res.data))
      .catch((err) => console.error(err));
  };
  // Components
  useEffect(() => {
    const abortFetch = new AbortController();
    getcurrentUser();
    return () => abortFetch.abort();
  }, [loggedIn]);
  console.log("currentUser", currentUser);

  return (
    <div className="container">
      <BrowserRouter>
        {loggedIn && (
          <Navbar onLogout={() => Auth.logout()} currentUser={currentUser} />
        )}

        <Switch>
          {!loggedIn && (
            <>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
            </>
          )}
          <Route exact path="/feed">
            <PostsPage user={currentUser} />
          </Route>
          <Route exact path="/events">
            <EventsPage user={currentUser} />
          </Route>

          <Route path="/join" component={ChatPage} />
          <Route path="/chat" component={Chat} />
          <Route
            exact
            path="/:name/profile"
            component={(props) => (
              <UserProfile match={props.match} currentUser={currentUser} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
