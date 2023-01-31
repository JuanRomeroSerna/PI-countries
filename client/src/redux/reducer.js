import { GET_COUNTRIES, GET_COUNTRY_DETAILS, GET_COUNTRY_BY_NAME, SORT_ALPHABETICAL, SORT_BY_POPULATION, FILTER_BY_CONTINENT, CLEAR_FILTERS } from "./actions/countries"
import { GET_ACTIVITIES, FILTER_ACTIVITIES, DELETE_ACTIVITY, CREATE_ACTIVITY, ERROR } from "./actions/activities"

const initialState = {
  countries: [],
  sortCountries: [],
  countriesDetail: [],
  country: {},
  activities: [],
  filters: { activities: "activities", continents: "all" },
  error: ""
}
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload],
        sortCountries: [...action.payload]
      }
    case GET_COUNTRY_DETAILS:
      return { ...state, country: action.payload }
    case GET_COUNTRY_BY_NAME:
      return { ...state, country: action.payload }

    case SORT_ALPHABETICAL:
      const sortCountries = state.countries
      const sortedCountries = action.payload === "A-Z" ? sortCountries.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0
      })
        : action.payload === "Z-A" ? sortCountries.sort((a, b) => {
          if (a.name > b.name) return -1
          if (a.name < b.name) return 1
          return 0
        }) : [...sortCountries]
      return {
        ...state,
        sortCountries: sortedCountries
      }

    case SORT_BY_POPULATION:
      const sortPopulation = state.countries
      const sortedPopulation = action.payload === "Highest" ? sortPopulation.sort((a, b) => { return b.population - a.population })
        : action.payload === "Lowest" ? sortPopulation.sort((a, b) => { return a.population - b.population }) : [...sortPopulation]
      return {
        ...state,
        sortCountries: sortedPopulation
      }

    case FILTER_BY_CONTINENT:
      state.filters.continents = action.payload;
      const allCountries = state.countries;
      const continentFilter =
        action.payload === "all"
          ? allCountries
          : allCountries.filter(
            (country) => country.continent === action.payload
          );
      return {
        ...state,
        sortCountries: [...continentFilter],
      }
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload }
    case FILTER_ACTIVITIES:
      state.filters.activities = action.payload;
      const allCountriesActivities = state.countries;
      let filteredActivities = [];
      if (action.payload === "activities") {
        filteredActivities = allCountriesActivities.filter((country) =>
          country.activities[0]?.name
            ? country.activities[0]
            : false
        );
      } else {
        filteredActivities = allCountriesActivities.filter((event) =>
          event.activities.some(
            (country) => country.name === action.payload
          )
        );
      }
      if (state.filters.continents !== "all") {
        filteredActivities = filteredActivities.filter(
          (country) => country.continents === state.filters.continents
        );
      }
      return {
        ...state,
        sortCountries: [...filteredActivities],
      }

    case DELETE_ACTIVITY:
      return { ...state, activity: action.payload }
    case CREATE_ACTIVITY:
      return { ...state, activity: action.payload }
    case ERROR:
      return { ...state, error: action.payload }
    case CLEAR_FILTERS:
      return { ...state, sortCountries: state.countries }
    default:
      return { ...state }
  }
}

export default rootReducer