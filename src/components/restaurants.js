import React, { Component } from 'react';
import axios from 'axios';

const yelp_key='FPGJ2LPgJpxCoAN1CnIaBMNMqHRUjRXsHFdRjd85XtPcR_cW3iIaC6JVcYmBu7pVcjQBgcusX-pB-oAX7zR1WhR1kXbdGQ3hyOIieEQDJ0MasdBHUXvMxq8Q-KN2XXYx';
// const url = 'GET https://api.yelp.com/v3/businesses/search';


const config = {
  headers: {
    "accept": "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin":"*",
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers':  'Authorization',
    'Authorization': `Bearer ${yelp_key}`,
},
  params: {
    term: 'spicy',
    location: 'colorado',
    limit: 5
  }
};

class Restaurants extends Component {

  componentDidMount() {
    console.log(config);
    axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response));
    }

  render() {
    return (
      <div className="restaurants">
        Restaurants Page
      </div>
    )
  };
}

export default Restaurants;