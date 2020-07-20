import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import LoginPage from './containers/LoginPage'
import DashboardPage from './containers/DashboardPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>
        
      </Switch>
    </Router>
  );
}

function InitialPage(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


