import React from "react";
import "../Nav/Account.css";
import { Link } from "react-router-dom";

const Account = ({ setOpen, open, sessionToken }) => {

    const clearToken = () => {
        localStorage.clear();
      };

  return (
    <div onClick={() => setOpen(!open)} className="accountMain">
      {sessionToken === "" ? (
        <ul>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Signup</li>
          </Link>
        </ul>
      ) : (
        <ul>
          <Link to="/schedule">
            <li>Account</li>
          </Link>
          <Link to="/schedule">
            <li>
                Schedule
            </li>
          </Link>
          <a href="/">
            <li onClick={clearToken}>Logout</li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Account;
