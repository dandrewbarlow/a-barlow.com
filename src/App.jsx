// CSS
import 'bulma/css/bulma.min.css';
import './reset.css'
import './components/column-margin.css'

// components
import Nav from './components/Nav';
import icon from './img/icon_white.png'

// Pages
import Portfolio from './pages/Portfolio'
import About from './pages/About'

// Libraries
import React, { Component } from 'react'
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyFooter from './pages/MyFooter';


export default class App extends Component {

  render() {
  return (
    <>
    <Helmet>
      <title>
        Andrew Barlow
      </title>
      <link rel="icon" href={icon} />
    </Helmet>


    <Router>
      <Nav/>
      <Routes>

        <Route path="/" element={<Portfolio/>} />
        <Route path="/about" element={<About/>} />

      </Routes>

    </Router>

    <MyFooter />
    </>
  );
 }
}
