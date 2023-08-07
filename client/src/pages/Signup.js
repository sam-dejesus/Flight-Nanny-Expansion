
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";


import { login } from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    username: "",
    email: "",
    password: "",
    status: false,
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const fieldValue = type === "checkbox" ? event.target.checked : value;

    setFormState({
      ...formState,
      [name]: fieldValue,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="">
        <div className="card">
          <h4 className="form-header">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                  <div class="form-inputs-container form-check">
                  </div>

                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="Your first name"
                    name="firstname"
                    type="text"
                    value={formState.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="Your last name"
                    name="lastname"
                    type="text"
                    value={formState.lastname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="Your phone number"
                    name="phonenumber"
                    type="number"
                    value={formState.phonenumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="Create a new password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-inputs-container form-check">
                  <input
                    className="siteCheckBox"
                    type="checkbox"
                    name="status"
                    id="flexCheckDefault"
                    checked={formState.status}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I’m a Nanny and I’m here to help
                  </label>
                </div>

                <div className="ButtonContainer">
                  
                    <button
                      className="btn-wide btn-primary login"
                      style={{ cursor: "pointer" }}
                      type="button"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                  
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                There was a problem with Signup!
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;


