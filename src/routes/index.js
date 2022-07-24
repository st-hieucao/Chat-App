import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import CallVideo from "../pages/call-video";
import Home from "../pages/home";
import Register from "../pages/register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register" component={Register} />
      <Route path="/call-video/:id" component={CallVideo} />
    </Switch>
  )
}

export default Routes