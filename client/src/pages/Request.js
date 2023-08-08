

import React from "react";
import { useLocation } from "react-router-dom";

const Request = () => {
  const location = useLocation();
  const passenger = location.state.passenger;

  return (
    <div>
      <h2>Passenger Details</h2>
      <p>Name: {`${passenger.firstname} ${passenger.lastname}`}</p>
      <p>Phone Number: {passenger.phonenumber}</p>
      <p>Email: {passenger.email}</p>
      <p>Children: {passenger.children}</p>
      <p>Price: ${passenger.price}.00</p>
     <h3>We have sent {passenger.firstname} a notification ❤️</h3>
    </div>
  );
};

export default Request;
