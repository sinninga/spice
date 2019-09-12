import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';

const yelp_key='FPGJ2LPgJpxCoAN1CnIaBMNMqHRUjRXsHFdRjd85XtPcR_cW3iIaC6JVcYmBu7pVcjQBgcusX-pB-oAX7zR1WhR1kXbdGQ3hyOIieEQDJ0MasdBHUXvMxq8Q-KN2XXYx';
// const url = 'GET https://api.yelp.com/v3/businesses/search';

let location = 'loveland';
let term = "spicy";
let limit = 5;

const config = {
  headers: {
    "accept": "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin":"*",
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers':  'Authorization',
    'Authorization': `Bearer ${yelp_key}`,
},
  // params: {
  //   term: 'spicy',
  //   location: `${location}`,
  //   limit: 10
  // }
};

class Restaurants extends Component {
  state = {
    restaurants: ['red'],
    location: location,
    term: term,
    limit: limit
  };

  onSubmit(e) {
    this.setState({ location: e.target.value })
  }
  
  componentDidMount() {
    console.log(config);
    const data = axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${this.state.location}&term=${this.state.term}&limit=${this.state.limit}`, config)
    .then(response => this.setState({ restaurants: response.data.businesses}));
    // .then(response => console.log(response.data.businesses[0].name))
    // .then(response => console.log(response.data.businesses));
    // const results = response.data
    // console.log(data.businesses);
    // console.log();
  }

  render() {
    return (
      <div className="restaurants">
          <h2>
            {this.state.restaurants.map((rest) => 
              <Item rest={rest} />
            )}
          </h2>
      </div>
    )
  };
}


export default Restaurants;