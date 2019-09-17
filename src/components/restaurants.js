import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';
import L from 'leaflet';

const yelp_key='FPGJ2LPgJpxCoAN1CnIaBMNMqHRUjRXsHFdRjd85XtPcR_cW3iIaC6JVcYmBu7pVcjQBgcusX-pB-oAX7zR1WhR1kXbdGQ3hyOIieEQDJ0MasdBHUXvMxq8Q-KN2XXYx';
// const url = 'GET https://api.yelp.com/v3/businesses/search';

let location = 'loveland';
let term = "tacos";
let limit = 7;
let long = [];
let lat = [];
let mymap = '';

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
      limit: limit,
      lat: lat,
      long: long
    };
  }
    
    async componentDidMount() {
    // console.log(config);
    
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${this.state.location}&term=${this.state.term}&limit=${this.state.limit}`;
    const response = await fetch(url, config);
    const data = await response.json();
    this.setState({ restaurants: data.businesses });
    // console.log(data.businesses);
    for(var i in data.businesses) {
      long.push(data.businesses[i].coordinates.longitude)
    }
    for(var x in data.businesses) {
      lat.push(data.businesses[x].coordinates.latitude)
    }
    // .then(response => console.log(response.data.businesses[0].name))
    mymap = L.map('mapid').setView([lat[0], long[0]], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    
    const chiliIcon = L.icon({
      iconUrl:  'https://cdn4.iconfinder.com/data/icons/filled-vegetables-colored/4096/Chili_pepper_2-512.png',
      iconSize: [50, 50]
    });

    for(var y in data.businesses) {
    L.marker([lat[y], long[y]], { icon: chiliIcon, title: this.state.restaurants[y].name }).addTo(mymap);
    }
    // .then(response => console.log(response.data.businesses));
    // const results = response.data
    // console.log(data.businesses);
    // console.log();
  }
  
  handleInputChange = (event) => {
    // event.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${event.target.value}&term=${this.state.term}&limit=${this.state.limit}`, config)
    .then((response) => {
      setTimeout(() => {
      mymap.remove();
      lat = [];
      long = [];
      // console.log(response.data.businesses);
      this.setState({
        restaurants: response.data.businesses
      })
      for(var i in response.data.businesses) {
        long.push(response.data.businesses[i].coordinates.longitude);
        this.setState({ long: long});
      }
      for(var x in response.data.businesses) {
        lat.push(response.data.businesses[x].coordinates.latitude);
        this.setState({ lat: lat});
      }
      mymap = L.map('mapid').setView([lat[0], long[0]], 13);const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(mymap);
      console.log(mymap);
      const chiliIcon = L.icon({
        iconUrl:  'https://cdn4.iconfinder.com/data/icons/filled-vegetables-colored/4096/Chili_pepper_2-512.png',
        iconSize: [50, 50]
      });
      for(var a in response.data.businesses) {
        L.marker([lat[a], long[a]], { icon: chiliIcon, title: this.state.restaurants[a].name  }).addTo(mymap);
        }
    // this.setState({ restaurants: response.data.businesses })
    }, 1000)})
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
      <div className="all-content">
        <div className="left-content">
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form">
              <div>
                <h1 className="search-label">Find Spicy Food Near You</h1>
                <input id='form-input' type="text" placeholder='City, State' onChange={this.handleInputChange}/>
              </div>
            </form>
          </div>
          <div className="restaurants">
            <div className="restaurants-content">
              {this.state.restaurants.map((rest, key) => 
                <Item rest={rest} key={key} />
              )}
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="map-container">
            <div id="mapid"></div>
          </div>
        </div>
      </div>
    )
  };
}


export default Restaurants;