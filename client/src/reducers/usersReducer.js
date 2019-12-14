import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
} from "../actions/userActions";

const initialState = {
  isFetching: false,
  usersData: [],
  errors: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return state;
    case FETCH_USERS_SUCCESS:
      return state;
    case FETCH_USERS_ERROR:
      return state;
    case ADD_USER_START:
      return state;
    case ADD_USER_SUCCESS:
      return state;
    case ADD_USER_ERROR:
      return state;
    case UPDATE_USER_START:
      return state;
    case UPDATE_USER_SUCCESS:
      return state;
    case UPDATE_USER_ERROR:
      return state;
    case DELETE_USER_START:
      return state;
    case DELETE_USER_SUCCESS:
      return state;
    case DELETE_USER_ERROR:
      return state;
    default:
      return state;
  }
};
