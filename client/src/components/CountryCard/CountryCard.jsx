import React from "react";
import { Link } from "react-router-dom";
import style from "./CountryCard.module.css";

const CountryCard = ({ id, continent, flag, name }) => {
  return (
    <Link to={`/countries/${id}`} className={style.link}>
      <div className={style.card}>
        <img src={flag} alt={name} className={style.flag} />
        <div className={style.textBox}>
          <h3 className={style.name}>{name}</h3>
          <p className={style.continent}>Continent: {continent}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
