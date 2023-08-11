import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout, loggedIn, getProfile } from "../../utils/auth";
import { BiSolidPlaneAlt } from "react-icons/bi";
import "./header.css"
const Header = () => {
  const navigate = useNavigate();

  const logoutAction = (event) => {
    event.preventDefault();
    navigate("/")
    logout();


  };
  return (

    <header className="header">
      <div className="navbar px-4">
      <BiSolidPlaneAlt style={{color: 'white', fontSize: '50px'}}/>
        <div className="flex-1">
          <Link to="/" className="Title">
            Flight Nanny
          </Link>
        </div>
        <div className="d-flex flex-row col-6 justify-content-end align-items-end">
          <ul className="menu menu-horizontal px-1">
            {loggedIn() ? (
              <>
                <Link className="navButtonLogin" to="/profile">
                  {getProfile().data.username}'s profile
                </Link>
                <button className="navButtonLogin" onClick={logoutAction}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="navButton">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="navButton">Sign Up</Link>
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
