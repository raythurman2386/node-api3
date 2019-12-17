import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import NavBar from "./components/navbar";
import Home from "./components/home";
import Users from "./components/users";
import Posts from "./components/posts";
import UploadImage from "./components/form";
import UserDetails from "./components/users/UserDetails";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={UserDetails} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/upload" component={UploadImage} />
      </Switch>
    </div>
  );
}

export default App;
