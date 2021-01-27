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


class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
        yearForecastData: yearForecastData,
  }
  }
  
  render() {
        console.log(yearForecastData);
  return (
    // <div className="App">
    //   <h1></h1>
    // </div>
    
    <HashRouter>
      
    
      <Navbar bg="light" expand="lg">
  <     Navbar.Brand href="#home">Numerology-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/forecast">Forecast</Nav.Link>

          </Nav>
    
    </Navbar.Collapse>
    </Navbar>
    <Container>
          <Route exact path="/">
                  <HomePage  yearForecastData = {this.state.yearForecastData} />
          </Route>

          <Route exact path="/forecast">
                  <ForecastPage />
          </Route>

          <Route exact path="/my-page">
                  <PersonalPage />
          </Route>

          <Route exact path="/signup">
                  <SignupPage />
          </Route>

          <Route exact path="/login">
                  <LoginPage />
          </Route>
          
      </Container>
    </HashRouter>

    );
  }
}

export default App;
