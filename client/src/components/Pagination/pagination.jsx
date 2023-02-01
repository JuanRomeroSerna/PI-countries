import React from "react";
import style from "./pagination.module.css";

const Pagination = ({
  countriesPerPage,
  sortCountries,
  pagination,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(sortCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  function handlePrevious() {
    pagination(currentPage - 1);
  }

  function handleNext() {
    pagination(currentPage + 1);
  }

  return (
    <div className={style.container}>
      <button
        className="{}"
        disabled={currentPage === 1 ? true : false}
        onClick={() => handlePrevious()}
      >
        {" "}
        {"< Prev"}{" "}
      </button>
      {pageNumbers &&
        pageNumbers.map((n) => (
          <button
            className={currentPage === n ? style.active : ""}
            key={n}
            onClick={() => pagination(n)}
          >
            {" "}
            {n}{" "}
          </button>
        ))}
      <button
        className=""
        disabled={currentPage === pageNumbers.length ? true : false}
        onClick={() => handleNext()}
      >
        {" "}
        {"Next >"}{" "}
      </button>
    </div>
  );
};

export default Pagination;
