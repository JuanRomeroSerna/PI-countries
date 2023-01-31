import { useState } from "react";
import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import Style from "./CardContainer.module.css";
import Pagination from "../Pagination/pagination";
import SortFilters from "../SortFilter/SortFilter";

const CardsContainer = () => {
  const sortCountries = useSelector((state) => state.sortCountries);

  const [sort, setSort] = useState(1); // eslint-disable-line
  const [state, setState] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
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
    <div className={Style.container}>
      <SortFilters
        setState={setState}
        state={state}
        setSort={setSort}
        setCurrentPage={setCurrentPage}
      />

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

      <div>
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
