import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Registration from './registration/Registration';
import Login from './Login/Login';
import {  BrowserRouter as Router,  Route, Link, Switch } from 'react-router-dom';
function App() {
  return (
   <Router>
      <div className="App">
        <Route exact path='/' component={Registration}></Route>
        <Route exact path='/login' component={Login}></Route>
      </div>
  </Router>
  );
}

export default App;
