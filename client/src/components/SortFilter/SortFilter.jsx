import React from "react";
import { useSelector } from "react-redux";
import {
  sortByPopulation,
  sortAlphabetical,
  filterByContinent,
  getCountries,
} from "../../redux/actions/countries";
import { filterActivities } from "../../redux/actions/activities";
import style from "./SortFilter.module.css";
import { useDispatch } from "react-redux";

const SortFilters = ({ setState, state, setSort }) => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  const handlePopulation = (event) => {
    dispatch(sortByPopulation(event.target.value));
    setState(!state);
  };

  const handleAlphabetical = (event) => {
    dispatch(sortAlphabetical(event.target.value));
    setState(!state);
  };

  const handleContinet = (event) => {
    dispatch(filterByContinent(event.target.value));
    setSort(1);
  };

  const handleActivity = (event) => {
    dispatch(filterActivities(event.target.value));
    setSort(1);
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(getCountries());
    document.getElementById("population").value = "";
    document.getElementById("alphabetical").value = "";
    document.getElementById("continent").value = "all";
    document.getElementById("activities").value = "activities";
  };
  return (
    <div className={style.container}>
      <div className={style.sort}>
        <h3>Sort by:</h3>
        <select
          className={style.option}
          id="population"
          onChange={handlePopulation}
        >
          <option value="">-Population-</option>
          <option value="Highest">Highest</option>
          <option value="Lowest">Lowest</option>
        </select>
        <select
          className={style.option}
          id="alphabetical"
          onChange={handleAlphabetical}
        >
          <option value="">Alphabetical</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div className={style.filter}>
        <h3>Filter by continet:</h3>
        <select
          className={style.option}
          id="continent"
          onChange={handleContinet}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div className={style.filter}>
        <h3>Filter by activity:</h3>
        <select
          className={style.option}
          id="activities"
          onChange={handleActivity}
        >
          <option value="activities">Activities</option>
          {activities?.map((activity, index) => (
            <option key={index} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>
      <button className={style.clearFilter} onClick={handleClick}>
        <span>Clear Filters</span>
      </button>
    </div>
  );
};

export default SortFilters;
