import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  UPDATE_POST_START,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR
} from "../actions/postActions";

const initialState = {
  isFetching: false,
  postsData: [],
  errors: null
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return state;
    case FETCH_POSTS_SUCCESS:
      return state;
    case FETCH_POSTS_ERROR:
      return state;
    case ADD_POST_START:
      return state;
    case ADD_POST_SUCCESS:
      return state;
    case ADD_POST_ERROR:
      return state;
    case UPDATE_POST_START:
      return state;
    case UPDATE_POST_SUCCESS:
      return state;
    case UPDATE_POST_ERROR:
      return state;
    case DELETE_POST_START:
      return state;
    case DELETE_POST_SUCCESS:
      return state;
    case DELETE_POST_ERROR:
      return state;
    default:
      return state;
  }
};
