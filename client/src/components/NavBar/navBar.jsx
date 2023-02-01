import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SerchBar/SerchBar";
import style from "./navBar.module.css";
const NavBar = () => {
  return (
    <div className={style.container}>
      <button className={style.button}>
        <Link to="/">LANDING PAGE</Link>
      </button>
      <button className={style.button}>
        <Link to="/countries">COUNTRIES</Link>
      </button>
      <button className={style.button}>
        <Link to="/activities">ACTIVITIES</Link>
      </button>
      <SearchBar />
    </div>
  );
};

export default NavBar;
