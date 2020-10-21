import React from "react";
import Routes from './Routes'
import {connect} from 'react-redux'
function App(props) {
  console.log(props);
  return (
    <Routes></Routes>
  );
}
const mapStateToProps = (state) =>{
  return {
    myname:state.name
  }
}
export default connect(mapStateToProps)(App);
