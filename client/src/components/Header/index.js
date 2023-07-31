import React from "react";
import { Link } from "react-router-dom";

import { logout, loggedIn, getProfile } from "../../utils/auth";

const Header = () => {
  const logoutAction = (event) => {
    event.preventDefault();

    logout();
  };
  return (
    <header className="header">
      <div className="navbar">
        <div>
          <Link className="" to="/">
            <h1 className="">FlightNanny</h1>
          </Link>
        </div>
        <div className="">
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
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
