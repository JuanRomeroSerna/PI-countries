import axios from "axios";
import React, { /* useEffect, */ useState } from "react";
import { useSelector } from "react-redux";
import style from "./CreateForm.module.css";

const CreateForm = () => {
  const countries = useSelector((state) => state.countries);
  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const validate = (form) => {
    let errors = {};
    if (form.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    if (!form.difficulty) {
      errors.difficulty = "Difficulty is required";
    }
    if (!form.duration) {
      errors.duration = "Duration is required";
    }
    if (!form.season) {
      errors.season = "Season is required";
    }
    if (!form.countries[0]) {
      errors.countries = "Select at least 1 country";
    }
    return errors;
  };

  const err = validate(form);

  const handleCountries = (event) => {
    if (!form.countries?.includes(event.target.value)) {
      setForm({
        ...form,
        countries: [...form.countries, event.target.value],
      });
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      countries: form.countries.filter(
        (country) => country !== event.target.value
      ),
    });
  };

  const submitHandler = (event) => {
    window.location.reload(false);
    event.preventDefault();
    axios
      .post("http://localhost:3001/activities", form)
      .then(alert("Activity created"))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={submitHandler} className={style.form}>
      <div>
        <label className={style.label}>Name: </label>
        <br />
        {err.name && <span className={style.span}>{err.name}</span>}
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          placeholder="Type the activity name"
          className={style.input}
        />
      </div>
      <div>
        <label className={style.label}>Difficulty: </label>
        <br />
        {err.difficulty && <span className={style.span}>{err.difficulty}</span>}
        <select
          name="difficulty"
          onChange={changeHandler}
          className={style.select}
        >
          <option value="">--Select a Difficulty--</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
      </div>
      <div>
        <label className={style.label}>Duration: </label>
        <br />
        {err.duration && <span className={style.span}>{err.duration}</span>}
        <input
          type="text"
          name="duration"
          onChange={changeHandler}
          placeholder="Ex: 1 hours"
          className={style.input}
        />
      </div>
      <div>
        <label className={style.label}>Season: </label>
        <br />
        {err.season && <span className={style.span}>{err.season}</span>}
        <select name="season" onChange={changeHandler} className={style.select}>
          <option value="">--Select a Season--</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="autumn">Autumn</option>
          <option value="spring">Spring</option>
        </select>
      </div>
      <div>
        <label className={style.label}>Countries: </label>
        <br />
        {err.countries && <span className={style.span}>{err.countries}</span>}
        <select
          name="countries"
          onChange={handleCountries}
          className={style.select}
        >
          <option value="">--Select a Country--</option>
          {sortedCountries.map((country, index) => (
            <option key={index}>{country.name}</option>
          ))}
        </select>
      </div>
      <div className="">
        {form.countries?.map((country, index) => (
          <span key={index} value={country} className={style.country}>
            {country}
            <button
              onClick={handleDelete}
              className={style.buttonCountry}
              value={country}
            >
              x
            </button>{" "}
          </span>
        ))}
      </div>
      <br />
      <button
        type="submit"
        className={style.buttonSubmit}
        disabled={Object.entries(err).length ? true : false}
      >
        Create
      </button>
    </form>
  );
};

export default CreateForm;
