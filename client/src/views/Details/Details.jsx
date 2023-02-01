import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountryDetails } from "../../redux/actions/countries";
import CountryCardId from "../../components/CountryCardId/CountryCardId";
import style from "./Details.module.css";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryDetails(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <CountryCardId />
    </div>
  );
};

export default Details;
