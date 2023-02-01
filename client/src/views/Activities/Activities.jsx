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
        BACK
      </Link>
      <h1> Create activities </h1>
      <div className={style.form}>
        <CreateForm />
      </div>
      <br />
      <hr />
      <DisplayActivities />
    </div>
  );
};

export default Activities;
