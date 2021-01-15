import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/pages/Users/Users';
import Jobs from './components/pages/Jobs/Jobs';
import Salary from './components/pages/Salary/Salary';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Users' />
          <Users />
        <Route path='/Jobs' component={Jobs} />
          <Jobs />
        <Route path='/Salary' component={Salary} />
          <Salary />
        <Route path='/Login' component={Login} />
          <Login />
        <Route path='/Register' component={Register} />
          <Register />
      </Switch>  
    </Router>
  );
}

export default App;
