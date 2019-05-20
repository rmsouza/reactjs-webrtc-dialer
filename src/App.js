import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './components/Signup';
import Contacts from './components/Contacts';
import Call from './components/Call';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Route exact path="/" component={Signup} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/call" component={Call} />
        </Router>
      </div>
    </div>
  );
}

export default App;
