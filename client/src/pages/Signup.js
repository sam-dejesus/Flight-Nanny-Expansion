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
  });

  const [selectedRadial, setSelectedRadial] = useState();

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
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

  const formType = () => {
    if (selectedRadial === "passanger") {
      return (
        <button
          className="btn btn-block btn-primary px-5"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          Add family
        </button>
      );
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="card">
                  <div class="form-inputs-container form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onClick={() => setSelectedRadial("nanny")}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      I’m a Nanny and I’m here to help
                    </label>
                  </div>
                  <div class="form-inputs-container form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      onClick={() => setSelectedRadial("passanger")}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      I have kids and I need help!!
                    </label>
                  </div>
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
                <div className="ButtonContainer">
                  <div className="form-inputs-container form-input form-check">
                    {formType()}
                    <button
                      className="btn btn-block btn-primary px-5"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
