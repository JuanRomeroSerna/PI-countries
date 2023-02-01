import style from "./Activities.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/countries";
import { getActivities } from "../../redux/actions/activities";
import CreateForm from "../CreateForm/CreateForm";
import DisplayActivities from "./DisplayActivities";
import { Link } from "react-router-dom";

const Activities = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <Link to="/countries" className={style.link}>
        BACK TO COUNTRIES
      </Link>
      <h1> Activities </h1>
      <CreateForm />
      <br />
      <hr />
      <DisplayActivities />
    </div>
  );
};

export default Activities;
