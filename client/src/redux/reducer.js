import { GET_COUNTRIES, GET_COUNTRY_DETAILS, GET_COUNTRY_BY_NAME, SORT_ALPHABETICAL, SORT_BY_POPULATION, FILTER_BY_CONTINENT, CLEAR_FILTERS } from "./actions/countries"
import { GET_ACTIVITIES, FILTER_ACTIVITIES, DELETE_ACTIVITY, CREATE_ACTIVITY, ERROR } from "./actions/activities"

const initialState = {
  countries: [],
  sortCountries: [],
  countryDetails: {},
  activities: [],
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
      return { ...state, countryDetails: action.payload }
    case GET_COUNTRY_BY_NAME:
      return { ...state, sortCountries: action.payload }

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
      const allCountries = state.countries
      const filterCountries = action.payload === "all" ? [...allCountries] : allCountries.filter(country => country.continent === action.payload)
      return {
        ...state,
        sortCountries: filterCountries
      }
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload }
    case FILTER_ACTIVITIES:
      const filterActivities = state.countries
      const filteredActivities = action.payload === "activities" ? [...filterActivities] : filterActivities.filter(country => country.activities.map(activity => activity.name).includes(action.payload))
      return {
        ...state,
        sortCountries: filteredActivities
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