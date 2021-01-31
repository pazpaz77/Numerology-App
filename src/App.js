import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ForecastPage from './pages/ForecastPage';
import PersonalPage from './pages/PersonalPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { Container, Nav, Navbar } from 'react-bootstrap';
import yearForecastData from './data/Personalyear.js';
import dayForecastData from './data/PersonalDay.js';
import lifePathData from './data/LifePath.js';


import BirthdayCardPage from './pages/BirthdayCardPage';


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
        yearForecastData: yearForecastData,
        lifePathData: lifePathData,
        dayForecastData: dayForecastData,
  }
  }
  
  render() {
        console.log(yearForecastData);
        console.log("life path: " ,lifePathData);
        console.log("day forecast: " ,dayForecastData);
  return (
   
    
    <HashRouter>
      
    
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
        <img
        src="https://c0.klipartz.com/pngpicture/273/404/gratis-png-plantilla-de-cara-de-reloj-plantillas-de-reloj.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        
      />  My Numerology
     
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/forecast">Personal Numerology Forecasts</Nav.Link>
            <Nav.Link href="/#/birthdayCard">Create a Birthday Card</Nav.Link>

          </Nav>
    
    </Navbar.Collapse>
    </Navbar>
    <Container className="app-container">
          <Route exact path="/">
                  <HomePage 
                  yearForecastData = {this.state.yearForecastData} 
                  lifePathData = {this.state.lifePathData}/>
          </Route>

          <Route exact path="/birthdayCard">
                  <BirthdayCardPage 
                  yearForecastData = {this.state.yearForecastData} />
          </Route>

          <Route exact path="/forecast">
                  <ForecastPage 
                  yearForecastData = {this.state.yearForecastData} 
                  dayForecastData = {this.state.dayForecastData}/>
          </Route>

          {/* <Route exact path="/my-page">
                  <PersonalPage />
          </Route>

          <Route exact path="/signup">
                  <SignupPage />
          </Route>

          <Route exact path="/login">
                  <LoginPage />
          </Route>  */}
          
      </Container>
    </HashRouter>

    );
  }
}

export default App;
