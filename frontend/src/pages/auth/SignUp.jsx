import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp({ onSubmite }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="AvatarWrap">Join us!</h4>
        <div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
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
              className="btn btn-info"
              onClick={(e) => onSubmite({ name, email, password })}
            >
              Create account
            </button>
          </div>
          <div className="AvatarWrap">
            <Link to="/" variant="body2">
              {"Don't have an account? Sign In"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
