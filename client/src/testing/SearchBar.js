
import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client"; // Update the import statement

const SEARCH_PASSENGERS = gql`
  query SearchPassengers($Flight_number: String!) {
    Flight_number(Flight_number: $Flight_number) {
      _id
      first_name
      last_name
      Flight_number
      Nanny
      phone_number
      email
      children
    }
  }
`;
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchPassengers, { loading, data }] = useLazyQuery(SEARCH_PASSENGERS);
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {

      searchPassengers({ variables: { Flight_number: searchQuery } });
    }
  };
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search passengers by Flight number"
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : data && data.Flight_number ? (
        <ul>
          {data.Flight_number.map((passenger) => (
            <li key={passenger._id}>
              <p>Name: {`${passenger.first_name} ${passenger.last_name}`}</p>
              <p>Flight Number: {passenger.Flight_number}</p>
              <p>Nanny: {passenger.Nanny ? "Yes" : "No"}</p>
              <p>Phone Number: {passenger.phone_number}</p>
              <p>Email: {passenger.email}</p>
              <p>Children: {passenger.children}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};
export default SearchBar;

