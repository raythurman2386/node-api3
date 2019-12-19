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
  isLoading: false,
  postsData: [],
  errors: ""
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        isLoading: true,
        postsData: [],
        errors: ""
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postsData: action.payload,
        errors: ""
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        postsData: [],
        errors: action.payload
      };
    case ADD_POST_START:
      return {
        ...state,
        isLoading: true,
        postsData: [],
        errors: ""
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postsData: [...state.postsData, action.payload],
        errors: ""
      };
    case ADD_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        postsData: [],
        errors: action.payload
      };
    case UPDATE_POST_START:
      return {
        ...state,
        isLoading: true,
        postsData: [],
        errors: ""
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postsData: [
          state.postsData.filter(post => post.id !== action.payload.id),
          action.payload
        ],
        errors: ""
      };
    case UPDATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        postsData: [],
        errors: action.payload
      };
    case DELETE_POST_START:
      return {
        ...state,
        isLoading: true,
        postsData: [],
        errors: ""
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postsData: state.postsData.filter(
          post => post.id !== action.payload.id
        ),
        errors: ""
      };
    case DELETE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        postsData: [],
        errors: action.payload
      };
    default:
      return state;
  }
};
