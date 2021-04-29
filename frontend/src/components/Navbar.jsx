//NPM packages
import React from "react";
import { Link } from "react-router-dom";
//styling from boostrap


export default function Navbar({ onLogout }) {
  return (
    <nav className="color-nav navbar" >
  
 <Link className="navbar-brand" to="/">
<img width="120px" height="auto" text="align" className="img-responsive"  src="https://www.linkpicture.com/q/logo5_5.png"  alt="logo" />
      
</Link> 
      

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          

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
          

        </ul>

        <button
          className="btn btn-outline-light " id="navbarColor01"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
