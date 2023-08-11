import React, { useState } from "react";

import { ADD_PASSENGER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { getProfile } from "../utils/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    // Regex pattern for validating the budget input
    const budgetPattern = /^\d+(\.\d{1,2})?$/;

    // Regex pattern for validating the flight number input


  const [userData, setUserData] = useState(getProfile().data);


  const [formState, setFormState] = useState({
    firstname: userData.firstname,
    lastname: userData.lastname,
    phonenumber: userData.phonenumber,
    email: userData.email,
    flight_number: "",
    price: "",
    children: "",
  });


  const [addPassenger, { error, data }] = useMutation(ADD_PASSENGER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let fieldValue = value;

    // Validate input using regex patterns
    if (name === "price" && !budgetPattern.test(value)) {
      fieldValue = formState.price; // Reset to previous value
    }

    setFormState({
      ...formState,
      [name]: fieldValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
  
    try {
      const { data } = await addPassenger({
        variables: { ...formState }
      });
  
      console.log(data); // Log the response data here
  
      // Handle the response data as needed (e.g., show a success message)
      console.log("New passenger created:", data.addPassenger);

      toast.success("Passenger created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (e) {
      toast.error("An error occurred while creating the passenger.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      console.error(e);
    }
  };
  


  return (

    <div className="d-flex flex-column justify-content-center">
      <h1 className="">Welcome {userData.username}</h1>
      <div className="">
        <p className="">Which child is traveling with you today?</p>
        <input
          className="form-input"
          placeholder="2"
          name="children"
          type="text"
          value={formState.children}
          onChange={handleChange}
        />

      </div>
      <div className="">
        <p>What is your budget?</p>
        <input
          className="form-input"
          placeholder="$0.00"
          name="price"
          type="text"
          value={formState.price}
          onChange={handleChange}
        />
      </div>
      <div className="">
        <p>What flight are you on?</p>
        <input
          className="form-input"
          placeholder="flight_number"
          name="flight_number"
          type="text"
          value={formState.flight_number}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 d-flex justify-content-center ">
  
                    <button
                      className=" searchBtn px-5"
                      style={{ cursor: "pointer" }}
                      type="button"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                  </div>

    </div>
  );
};

export default Home;

