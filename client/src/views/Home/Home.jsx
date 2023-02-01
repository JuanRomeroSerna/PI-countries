import style from "./Home.module.css";
import CardsContainer from "../../components/CardContainer/CardContainer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/countries";
import { getActivities } from "../../redux/actions/activities";
import SortFilters from "../../components/SortFilter/SortFilter";

const Home = () => {
  const [sort, setSort] = useState(1); // eslint-disable-line
  const [state, setState] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <SortFilters setState={setState} state={state} setSort={setSort} />
      <hr />
      <CardsContainer />
      <hr />

      <br />
    </div>
  );
};

export default Home;
