
import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client"; // Update the import statement
import { useNavigate } from "react-router-dom";
import './searchbar.css'

const SEARCH_PASSENGERS = gql`
  query SearchPassengers($flight_number: String!) {
    flight_number(flight_number: $flight_number) {
      _id
      firstname
      lastname
      flight_number
      phonenumber
      email
      children
      price
    }
  }
`;
const SearchBar = () => {
  const navigate = useNavigate();
  const hi = (passenger)=>{  navigate("/request",  { state: { passenger } });}
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPassengers, { loading, data }] = useLazyQuery(SEARCH_PASSENGERS);
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {

      searchPassengers({ variables: { flight_number: searchQuery } });
    }
  };
  return (
    <div className="mt-5 searchDiv mb-5">
      <h2>Search passengers by flight number</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder=""
        className="inputSearch"
      />
      <button onClick={handleSearch} className="searchBtn">Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : data && data.flight_number ? (
        <ul>
          {data.flight_number.map((passenger) => (
            <li key={passenger._id} className="liDiv" onClick={() => hi(passenger)}>
              <p>Name: {`${passenger.firstname} ${passenger.lastname}`}</p>
              <p>Children: {passenger.children}</p>
              <p>Price: {passenger.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default SearchBar;

