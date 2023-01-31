import axios from "axios"
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES"
export const DELETE_ACTIVITY = "DELETE_ACTIVITY"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const ERROR = "ERROR"


export const getActivities = () => {
  return async function (dispatch) {
    const getData = await axios.get("http://localhost:3001/activities");
    const activities = getData.data
    dispatch({ type: GET_ACTIVITIES, payload: activities })

  };
};

export const filterActivities = (payload) => {
  return {
    type: FILTER_ACTIVITIES,
    payload: payload
  }
}

export const deleteActivity = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/activities/${id}`);
      dispatch({ type: DELETE_ACTIVITY, payload: id })
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    };
  };
};

export const createActivity = (activity) => {
  return async function (dispatch) {
    const getData = await axios.post("http://localhost:3001/activities", activity);
    const activityCreated = getData.data
    dispatch({ type: CREATE_ACTIVITY, payload: activityCreated })
  };
};

export const error = (error) => {
  return async function (dispatch) {
    dispatch({ type: ERROR, payload: error })
  };
};

