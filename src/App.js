import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/starred" component={Starred} />
      <Route>404 Page not Found !</Route>
    </Switch>
  );
}

export default App;
