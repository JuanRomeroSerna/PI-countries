import {
  CHECKING,
  CLOSE,
  ERROR,
  SEARCH,
  GET_COUNTRIES,
  GET_SORT,
  POPULATION,
  CONTINENTS,
  GET_ACTIVITIES,
  GET_SELECT_ACTIVITY,
} from "./actions";

const initialState = {
  countries: [],
  activities: [],
  selectActivity: [],
  sort: "",
  population: "",
  continents: "",
  search: "",
  error: "",
  checking: false,
  close: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case POPULATION:
      return {
        ...state,
        population: action.payload,
      };
    case CONTINENTS:
      return {
        ...state,
        continents: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case GET_SELECT_ACTIVITY:
      return {
        ...state,
        selectActivity: action.payload,
      };
    case CHECKING:
      return {
        ...state,
        checking: true,
      };
    case CLOSE:
      return {
        ...state,
        close: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;



