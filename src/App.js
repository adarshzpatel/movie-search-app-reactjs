import React from "react";
import { Route, Switch } from "react-router";
import ShowDetails from "./components/show/ShowDetails";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/starred" component={Starred} />
      <Route exact path="/show/:id" component={ShowDetails} />
      <Route> 404 Page not Found !</Route>
    </Switch>
  );
}

export default App;
