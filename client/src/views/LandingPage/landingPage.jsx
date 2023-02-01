import React from "react";
import { Link } from "react-router-dom";
import landing from "../../assets/landing.gif";
import style from "./landingPage.module.css";
const LandingPage = () => {
  return (
    <div className={style.container}>
      <h1>Pi Countries Juan Pablo Romero</h1>
      <br />
      <h4>Click on the button to enter:</h4>
      <Link to="/countries">
        <button className={style.button}> start </button>
      </Link>
      <br />
      <img src={landing} alt="" />
    </div>
  );
};

export default LandingPage;
