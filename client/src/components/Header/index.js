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
          <Link to="/" className="btn btn-ghost normal-case text-xl">Flight Nanny</Link>
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
            ):(
            <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            </>
          )}
          </ul>
        </div>
      </div>
      {/* <div className="navbar bg-base-100">
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
      </div> */}
    </header>
  );
};

export default Header;
