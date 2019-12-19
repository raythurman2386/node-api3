import { combineReducers } from "redux";
import { userReducer } from "./usersReducer";
import { postReducer } from "./postsReducer";

export default combineReducers({
  userReducer,
  postReducer
});
