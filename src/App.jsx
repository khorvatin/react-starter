import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Computers } from './Computers';
import { Home } from './Home';
import { Users } from './Users';
import { Header } from './Header';

function App() {
    return (
      <Router>
        <div>
          <Header />
  
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/computers" component={Computers} />
        </div>
      </Router>
    );
}

export default App;
