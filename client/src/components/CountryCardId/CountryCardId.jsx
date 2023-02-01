import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./CountryCardId.module.css";

const CountryCardId = () => {
  const country = useSelector((state) => state.countryDetails);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    useGrouping: true,
  });

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>{country.name}</h1>
      </div>
      <div>
        <img className={style.img} src={country.flag} alt="flag" />
      </div>
      <h1>Continent: {country.continent}</h1>
      <div className={style.info}>
        <h3>Id: {country.id}</h3>
        <h3>Capital: {country.capital}</h3>
        <h3>Subregion: {country.subregion}</h3>
        <h3>Area: {formatter.format(country.area)} km²</h3>
        <h3>Population: {formatter.format(country.population)} (est.)</h3>
      </div>
      <h3>Activities:</h3>
      {country.activities?.length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Duration</th>
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {country.activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.difficulty}</td>
                <td>{activity.duration}</td>
                <td>{activity.season}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No activities found</p>
      )}
      <br />
      <Link to="/countries">Back</Link>
    </div>
  );
};

export default CountryCardId;
