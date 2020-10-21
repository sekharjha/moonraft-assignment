import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import signin from "./user/Signin";
import signup from "./user/Signup";
import Contact from "./core/Contact"
import View from './core/View'
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Pages"  component={View} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
