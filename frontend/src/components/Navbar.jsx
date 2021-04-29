// NPM Packages
import React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
// Material-ui styiling
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";


import { fade, makeStyles } from "@material-ui/core/styles";
import { Button } from 'semantic-ui-react'

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  logo: {
    maxWidth: 160,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar({ onLogout }) {
  // State
  const [query, setQuery] = useState("");

  // Consts
  const history = useHistory();

  // Get the correct url
  function onSearch(event) {
    event.preventDefault();

    history.push(`/parcels/${query}`);
  }
  //Styles
  const classes = useStyles();

  return (
    <AppBar className="color-nav" position="static">
      <Toolbar>
        <IconButton>
          <Link className="navbar-brand" to="/">
            <img
              width="120px"
              height="auto"
              text="align"
              className="img-responsive"
              src="https://www.linkpicture.com/q/logo5_5.png"
              alt="logo"
            />
          </Link>

          {/* <MenuIcon /> */}
        </IconButton>
        <li className="nav-item">
          <Link to="/posts" className="nav-link">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            My Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/chat" className="nav-link">
            Chat
          </Link>

          
        </li>
        <Button basic color='green'
            id="navbarColor01"
            onClick={onLogout}
          >
            Logout
          </Button>

        <div className={classes.search}>
          <div className={classes.searchIcon}></div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
