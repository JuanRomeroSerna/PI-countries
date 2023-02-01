import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SerchBar/SerchBar";
import style from "./navBar.module.css";
const NavBar = () => {
  return (
    <div className={style.container}>
      <Link to="/">LANDING PAGE</Link>
      <Link to="/countries">COUNTRIES</Link>
      <Link to="/activities">ACTIVITIES</Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
