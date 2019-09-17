import React, { Component } from 'react';
import RecipeCard from './recipeCard';

const recipe_key='eee96d5a36f96ef6df5b99a6da5b9180';

let term = "tacos";
let count = 8;

const config = {
  headers: {
    "accept": "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin":"*",
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers':  'Authorization',
    'Authorization': `Bearer ${recipe_key}`,
}};

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      term: term,
      count: count
    };
  }

  async componentDidMount() {
    // console.log(config);
    
    const url = `https://www.food2fork.com/api/search?key=${recipe_key}&q=taco&count=${this.state.count}`;
    const response = await fetch(url, config);
    const data = await response.json();

    this.setState({ recipes: data.recipes });

    console.log(this.state.recipes);

  }

  render() {
    return(
      <div className="recipes-container">
        <h1 className="recipes-title">
          Recipes
        </h1>
        <div className="recipe-cards-container">
          {this.state.recipes.map((recipe, key) => 
            <RecipeCard recipe={recipe} key={key} />
          )}
        </div>
      </div>
    )
  }


}

export default Recipes;