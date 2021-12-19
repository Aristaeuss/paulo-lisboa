import React from 'react';
import './App.css';
import About from './Components/About/About';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router> 
      <Switch> 
        <Route path='/' exact component={LandingPage} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>    
    </>
  );
}

export default App;
