import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Recipes from './components/recipes';
import Restaurants from './components/restaurants';
import Footer from './components/footer';
import 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Restaurants} />
        <Route path="/recipes" component={Recipes} />
        <Footer />
      </div>
    </Router>
      
  );
}

export default App;
