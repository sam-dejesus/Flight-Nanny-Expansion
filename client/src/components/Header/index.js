import React from "react";
import { Link } from "react-router-dom";

import { logout, loggedIn, getProfile } from "../../utils/auth";

const Header = () => {
  const logoutAction = (event) => {
    event.preventDefault();

    logout();
  };
  return (
    <header className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src="../../app-logo.png" width="100px" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Flight Nanny
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {loggedIn() ? (
              <>
                <Link className="" to="/me">
                  {getProfile().data.username}'s profile
                </Link>
                <button className="" onClick={logoutAction}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
