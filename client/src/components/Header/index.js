import React from "react";
import { Link } from "react-router-dom";

import { logout, loggedIn, getProfile } from "../../utils/auth";
 
const Header = () => {
  const logoutAction = (event) => {
    event.preventDefault();

    logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">FlightNanny</h1>
          </Link>
          <p className="m-0">A Nanny wings</p>
        </div>
        <div>
          {loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {getProfile().data.username}'s profile
              </Link>
              <button
                className="btn btn-lg btn-light m-2"
                onClick={logoutAction}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
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
