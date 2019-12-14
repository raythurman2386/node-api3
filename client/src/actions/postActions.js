import { axiosConfig as axios } from "../utils/axiosConfig";

// GET Users
export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS_START });
  axios()
    .get("/api/posts")
    .then(res => dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_POSTS_ERROR, payload: err.response }));
};

// Add Users
export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "ADD_POST_ERROR";

export const addPost = post => dispatch => {
  dispatch({ type: UPDATE_POST_START });
  axios()
    .put("/api/posts/:id", post)
    .then(res => dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_POST_ERROR, payload: err.response }));
};

// Update Users
export const UPDATE_POST_START = "UPDATE_POST_START";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_ERROR = "UPDATE_POST_ERROR";

export const updatePost = post => dispatch => {
  dispatch({ type: UPDATE_POST_START });
  axios()
    .put("/api/posts/:id", post)
    .then(res => dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_POST_ERROR, payload: err.response }));
};

// Delete Users
export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_ERROR = "DELETE_POST_ERROR";

export const deletePost = post => dispatch => {
  dispatch({ type: UPDATE_POST_START });
  axios()
    .put("/api/posts/:id", post)
    .then(res => dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATE_POST_ERROR, payload: err.response }));
};
