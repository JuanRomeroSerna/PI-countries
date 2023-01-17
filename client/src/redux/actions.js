import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES'; //
export const GET_SORT = 'GET_SORT';//
export const POPULATION = 'POPULATION';
export const CONTINENTS = 'CONTINENTS';
export const SEARCH = 'SEARCH';//
export const ERROR = 'ERROR';//
export const CLOSE = 'CLOSE';
export const CHECKING = 'CHECKING';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const GET_SELECT_ACTIVITY = 'GET_SELECT_ACTIVITY';

export function getCountries() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/countries');
      dispatch({ type: GET_COUNTRIES, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function getSort(payload) {
  return { type: GET_SORT, payload };
}

export function getPopulation(payload) {
  return { type: POPULATION, payload };
}

export function getContinents(payload) {
  return { type: CONTINENTS, payload };
}

export function getSearch(payload) {
  return { type: SEARCH, payload };
}

export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/activities');
      dispatch({ type: GET_ACTIVITIES, payload: response.data });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };
}

export function getSelectActivity(payload) {
  return { type: GET_SELECT_ACTIVITY, payload };
}

export function checking() {
  return { type: CHECKING };
}

export function close() {
  return { type: CLOSE };
}

export function error() {
  return { type: ERROR };
}

