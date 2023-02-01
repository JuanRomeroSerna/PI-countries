import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions/countries";
import style from "./Serchbar.module.css";

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

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  return (
    <div className={style.container}>
      <input
        id="search"
        type="text"
        placeholder="Search by name..."
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className={style.input}
      />
      <button className={style.button} type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
