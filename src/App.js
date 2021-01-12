import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

  /**
   * Try inject props into navbar
   * 
   * Add Routes & also make the component (Just Dummy First (Title on the blank page)) for
   *  - Users
   *  - Jobs
   *  - Sallary  
   *  - Login
   *  - Register
   */
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>  
    </Router>
  );
}

export default App;
