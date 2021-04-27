// NPM Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthPage({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="AvatarWrap">Login</h4>
        <div>
          <div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="AvatarWrap">
              <button
                className="btn btn-info"
                onClick={() => onSubmit({ email, password })}
              >
                Login
              </button>
            </div>
            <div className="AvatarWrap">
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
