import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const AppWithRouter = withRouter(App);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
