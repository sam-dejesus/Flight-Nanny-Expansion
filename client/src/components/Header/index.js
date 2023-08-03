import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout, loggedIn, getProfile } from "../../utils/auth";

const Header = () => {
  const navigate = useNavigate();

  const logoutAction = (event) => {
    event.preventDefault();
    navigate("/")
    logout();


  };
  return (
    <header className="header">
      <div className="navbar">
        <div>
        </div>
        <div>
          <Link className="" to="/">
            <h1 className="">FlightNanny</h1>
            <img src="../../app-logo.png" width="100px"/>
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
              <Link className="" to="/">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
