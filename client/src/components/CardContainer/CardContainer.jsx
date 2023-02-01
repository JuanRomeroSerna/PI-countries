import React, { useState } from "react";
import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import style from "./CardContainer.module.css";
import Pagination from "../Pagination/pagination";

const CardsContainer = () => {
  const sortCountries = useSelector((state) => state.sortCountries);

  const [currentPage, setCurrentPage] = useState(1); // eslint-disable-line
  const [countriesPerPage, setCountriesPerPage] = useState(10); // eslint-disable-line
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCharacter = indexOfLastCountry - countriesPerPage;
  const currentCountries = sortCountries.slice(
    indexOfFirstCharacter,
    indexOfLastCountry
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.container}>
      {currentCountries?.map((country, index) => {
        return (
          <CountryCard
            key={index}
            id={country.id}
            flag={country.flag}
            name={country.name}
            continent={country.continent}
          />
        );
      })}

      <div className={style.pag}>
        <Pagination
          countriesPerPage={countriesPerPage}
          sortCountries={sortCountries.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
