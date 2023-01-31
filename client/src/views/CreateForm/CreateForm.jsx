import axios from "axios";
import React, { /* useEffect, */ useState } from "react";
import { useSelector } from "react-redux";
// import { getActivities } from "../../redux/actions/activities";
// import { getCountries } from "../../redux/actions/countries";

const CreateForm = () => {
  const countries = useSelector((state) => state.countries);
  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // const activities = useSelector((state) => state.activities);
  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({
      ...form,
      [property]: value,
    });

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
    if (!form.countries.length) {
      errors.countries = "Select at least 1 country";
    }
    setErrors(errors);
  };

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
      .then((res) => alert(res))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
          placeholder="Type the activity name"
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Difficulty</label>
        <select
          name="difficulty"
          value={form.difficulty}
          onChange={changeHandler}
        >
          <option value="">--Select a Difficulty--</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>
        {errors.difficulty && <span>{errors.difficulty}</span>}
      </div>
      <div>
        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={changeHandler}
          placeholder="Ex: 1 hours"
        />
        {errors.duration && <span>{errors.duration}</span>}
      </div>
      <div>
        <label>Season</label>
        <select name="season" value={form.season} onChange={changeHandler}>
          <option value="">--Select a Season--</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="autumn">Autumn</option>
          <option value="spring">Spring</option>
        </select>
        {errors.season && <span>{errors.season}</span>}
      </div>
      <div>
        <label>Countries</label>
        <select
          name="countries"
          value={form.countries}
          onChange={(event) => handleCountries(event)}
        >
          <option value="">--Select a Country--</option>
          {sortedCountries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.countries && <span>{errors.countries}</span>}
      </div>
      <div className="">
        {form.countries?.map((country, index) => (
          <span key={index} className="" value={country}>
            {country}
            <button onClick={handleDelete} className="" value={country}>
              x
            </button>{" "}
          </span>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <button
        type="submit"
        className="buttonSubmit"
        disabled={Object.entries(errors).length ? true : false}
      >
        Create
      </button>
    </form>
  );
};

export default CreateForm;
