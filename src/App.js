import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Info from './components/info';
import Recipes from './components/recipes';
import Restaurants from './components/restaurants';
import 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Restaurants} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/info" component={Info} />
      </div>
    </Router>
      
  );
}

export default App;
