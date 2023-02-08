import React, { useState } from "react";
import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import style from "./CardContainer.module.css";
import Pagination from "../Pagination/pagination";
import NotFound from "../NotFound/NotFound";
import Loading from "../Loader/Loader";
import { useEffect } from "react";

const CardsContainer = () => {
  const sortCountries = useSelector((state) => state.sortCountries);
  const errors = useSelector((state) => state.errorCountry);

  const [currentPage, setCurrentPage] = useState(1); // eslint-disable-line
  const [countriesPerPage, setCountriesPerPage] = useState(10); // eslint-disable-line
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCharacter = indexOfLastCountry - countriesPerPage;
  const currentCountries = sortCountries.slice(
    indexOfFirstCharacter,
    indexOfLastCountry
  );

  useEffect(() => {
    if (currentCountries.length < 5) {
      setCurrentPage(1);
    }
  }, [currentCountries]);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.container}>
      {currentCountries.length ? (
        currentCountries?.map((country, index) => {
          return (
            <CountryCard
              key={index}
              id={country.id}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          );
        })
      ) : errors ? (
        <NotFound />
      ) : (
        <Loading />
      )}

      <div className={style.pag}>
        <Pagination
          countriesPerPage={countriesPerPage}
          sortCountries={sortCountries.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CardsContainer;
