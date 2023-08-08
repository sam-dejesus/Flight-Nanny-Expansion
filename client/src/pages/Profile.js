import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { getProfile } from "../utils/auth";
import { useNavigate } from "react-router-dom";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Profile = () => {
  const [userData, setUserData] = useState(getProfile().data);
  console.log(userData);


  const navigate = useNavigate();




  const searchFlights = () => {
    navigate("/search");
  };

  const postFlightRequest = () => {
    navigate("/home");
  };
  

  return (
    <div>
      {userData && (
        <div>
          <h1>{userData.username}'s Profile</h1>
          <p>Email: {userData.email}</p>
          Status: {userData.status ? "nanny" : "passenger"}
          {userData.status ? (
            <>
              
              <h2>ready to help</h2>
              <button onClick={searchFlights} className="Btn">Search Flights</button>{" "}
            </>
          ) : (
            <>
              <h2>ready!!!</h2>
              <button onClick={postFlightRequest} className="Btn">Post Flights</button>
            </>
          )}
        </div>
      )}
    </div>
  );


};

export default Profile;
