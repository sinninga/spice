import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Info from './components/info';
import Recipes from './components/recipes';
import Restaurants from './components/restaurants';
import 'react-dom';
import { BrowserRouter as Router, Route } from "react-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Restaurants />
      <Recipes />
      <Info />
    </div>
  );
}

export default App;
