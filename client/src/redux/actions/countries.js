import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS"
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME"
export const SORT_ALPHABETICAL = "SORT_BY_NAME"
export const SORT_BY_POPULATION = "SORT_BY_POPULATION"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const CLEAR_FILTERS = "CLEAR_FILTERS"


export const getCountries = () => {
  return async function (dispatch) {
    const getData = await axios.get("http://localhost:3001/countries");
    const countries = getData.data
    dispatch({ type: GET_COUNTRIES, payload: countries })
  };
};

export const getCountryDetails = (id) => {
  return async function (dispatch) {
    const getData = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = getData.data
    dispatch({ type: GET_COUNTRY_DETAILS, payload: country })
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const getData = await axios.get(`http://localhost:3001/countries?name=${name}`);
    const country = getData.data
    dispatch({ type: GET_COUNTRY_BY_NAME, payload: country })
  };
};

export const sortAlphabetical = (payload) => {
  return {
    type: SORT_ALPHABETICAL,
    payload: payload
  }
}

export const sortByPopulation = (payload) => {
  return {
    type: SORT_BY_POPULATION,
    payload: payload
  }
};

export const filterByContinent = (payload) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: payload
  }

}

export const clearFilters = () => dispatch => {
  return dispatch({ type: CLEAR_FILTERS })
}