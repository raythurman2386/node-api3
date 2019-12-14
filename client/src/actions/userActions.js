import { axiosConfig as axios } from "../utils/axiosConfig";

// GET Users
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios()
    .get("/api/users")
    .then(res => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_USERS_ERROR, payload: err.response }));
};

// Add Users
export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

export const addUser = user => dispatch => {
  dispatch({ type: ADD_USER_START });
  axios()
    .post("/api/users", user)
    .then(res => dispatch({ type: ADD_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_USER_ERROR, payload: err.response }));
};

// Update Users
export const UPDATE_USER_START = "UPDATE_USER_START";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const updateUser = user => dispatch => {
  dispatch({ type: UPDATE_USER_START });
  axios()
    .put("/api/users/:id", user)
    .then(res => dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_USER_ERROR, payload: err.response }));
};

// Delete Users
export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export const deleteUser = user => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axios()
    .put("/api/users/:id", user)
    .then(res => dispatch({ type: DELETE_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_USER_ERROR, payload: err.response }));
};
