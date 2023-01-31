import style from "./Home.module.css";
import CardsContainer from "../../components/CardContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions/countries";
import { getActivities } from "../../redux/actions/activities";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1> Home</h1>
      <hr />
      <CardsContainer />
    </div>
  );
};

export default Home;
