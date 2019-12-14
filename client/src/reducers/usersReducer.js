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
  isLoading: false,
  usersData: [],
  errors: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isLoading: true,
        usersData: [],
        errors: ""
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: action.payload,
        errors: ""
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        usersData: [],
        errors: action.payload
      };
    case ADD_USER_START:
      return {
        ...state,
        isLoading: true,
        usersData: [],
        errors: ""
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: [...state.usersData, action.payload],
        errors: ""
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        usersData: [],
        errors: action.payload
      };
    case UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
        usersData: [],
        errors: ""
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: [
          state.usersData.filter(user => user.id !== action.payload.id),
          action.payload
        ],
        errors: ""
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        usersData: [],
        errors: action.payload
      };
    case DELETE_USER_START:
      return {
        ...state,
        isLoading: true,
        usersData: [],
        errors: ""
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: state.usersData.filter(
          user => user.id !== action.payload.id
        ),
        errors: ""
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        usersData: [],
        errors: action.payload
      };
    default:
      return state;
  }
};
