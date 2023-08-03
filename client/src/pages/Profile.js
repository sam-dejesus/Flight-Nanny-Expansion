import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getProfile } from "../utils/auth";
import { useNavigate } from "react-router-dom";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Profile = () => {
  // Get the decoded user data from the token
  const userData = getProfile().data; //--- use state set value to empty obj 
  const navigate = useNavigate();

  // Save the status to local storage
  useEffect(() => {
    //--
    if (userData && userData.status !== null) {
      console.log(123)
      localStorage.setItem("userStatus", JSON.stringify(userData.status));
    }
  }, [userData]);

  // Retrieve the status from local storage (if needed)
  const storedStatus = JSON.parse(localStorage.getItem("userStatus"));

  const searchFlights = () => {
    navigate("/search");
  };

  const postFlightRequest = () =>{
    navigate("/home")
  }
console.log(456)
  if(storedStatus === true){
    return (
    <div>
      {userData && (
        <div>
          <h1>{userData.username}'s Profile</h1>
          <p>Email: {userData.email}</p>

          Status: {storedStatus ? "nanny" : "passenger"}

          <h2>ready to help</h2>
          <button onClick={searchFlights}>
            search Flights
          </button>

        </div>
      )}
    </div>
  );
  } else{
    return (
      <div>
        {userData && (
          <div>
            <h1>hello</h1>
            <p>Email: {userData.email}</p>

            <p> Status:  "passenger" </p>
            <h2>need help for your trip</h2>
            <button onClick={postFlightRequest}>
            post a help request
          </button>
          </div>
        )}
      </div>
    );
  }

 
};

export default Profile;
