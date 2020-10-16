import React from 'react';
import { Component } from 'react';
import './App.css';
import Navbar from './Component/Header/Navbar'
import TopBar from './Component/TopBar/topbar'
import { FooterContainer } from './Containers/footer';
import Carousel from './Component/Carousel/carousel'
import {BrowserRouter,Route} from 'react-router-dom';
import { Home } from './Pages/Home/home';
import { Contacts } from './Pages/Contacts/contact';
function App() {
  return (
    <div className="App">
      <TopBar/>
      <BrowserRouter>
      <Navbar/>
      <Carousel></Carousel>
      <Route exact path = "/" component={Home}/>
      <Route path = "/contacts" component={Contacts}/>
      </BrowserRouter>
      <FooterContainer/>
    </div>
  );
}

export default App;
