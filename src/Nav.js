import React from "react";

import { Link } from "react-router-dom";
import "./Nav.css";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
export default function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link id="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="link" to="/profile">
              Profile
            </Link>
          </li>

          <li>{isAuthenticated ? <Logout /> : <Login />}</li>
        </ul>
      </nav>
    </div>
  );
}
