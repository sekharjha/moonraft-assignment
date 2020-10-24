import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Contact from "./core/Contact"
import View from './core/View'
import Login from "./core/login";
class Routes extends Component{
  constructor(){
    super()
  this.state = {
    isLog:false
  }
}
  handleLogin =(isLog)=> this.setState({isLog})
  render(){
   
    const {isLog} = this.state
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  render={()=>!isLog?<Login isLogin = {this.handleLogin}/>:<Home/>}/>
        {/* <Route exact path="/" component = {Home} /> */}
        <Route path="/Contact" component = {Contact} />
        <Route path="/Pages" component = {View}/>
      </Switch>
    </BrowserRouter>
  );
};
}

export default Routes;
