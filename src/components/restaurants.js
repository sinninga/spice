import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';

const yelp_key='FPGJ2LPgJpxCoAN1CnIaBMNMqHRUjRXsHFdRjd85XtPcR_cW3iIaC6JVcYmBu7pVcjQBgcusX-pB-oAX7zR1WhR1kXbdGQ3hyOIieEQDJ0MasdBHUXvMxq8Q-KN2XXYx';
// const url = 'GET https://api.yelp.com/v3/businesses/search';

let location = 'loveland';
let term = "tacos";
let limit = 7;

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
  constructor(props) {
    super(props);
    
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      restaurants: [],
      location: location,
      term: term,
      limit: limit
    };
  }
    
    async componentDidMount() {
    // console.log(config);
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${this.state.location}&term=${this.state.term}&limit=${this.state.limit}`;
    const response = await fetch(url, config);
    const data = await response.json();
    this.setState({ restaurants: data.businesses });
    // .then(response => console.log(response.data.businesses[0].name))
    // .then(response => console.log(response.data.businesses));
    // const results = response.data
    // console.log(data.businesses);
    // console.log();
  }

  handleInputChange = (event) => {
    // event.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${event.target.value}&term=${this.state.term}&limit=${this.state.limit}`, config)
  .then((response) => {
    // console.log(response.data.businesses);
    this.setState({
      restaurants: response.data.businesses
    })
    // this.setState({ restaurants: response.data.businesses })
  })
  .catch(function (error) {
    console.log(error);
  });
    // this.setState({
    //   location: event.target.value
    // });
    // console.log(this.state.location);
    // console.log(this.state.restaurants)
  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} className="form">
          <div><h1 className="search-label">Find the Spicy</h1><input type="text" placeholder='City, State' onChange={this.handleInputChange}/></div>
        </form>
        <div className="restaurants">
            <div className="restaurants-content">
              {this.state.restaurants.map((rest, key) => 
                <Item rest={rest} key={key} />
              )}
            </div>
        </div>
      </div>
    )
  };
}


export default Restaurants;