import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions/countries";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getCountryByName(name));
    document.getElementById("search").value = "";
  };

  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="Search by name..."
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
