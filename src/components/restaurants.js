import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';
import L from 'leaflet';

const API_URL = '/api/yelp';

const yelp_key=process.env.REACT_APP_YELP_KEY;
// const url = 'GET https://api.yelp.com/v3/businesses/search';

let location = 'boulder';
let term = "mexican";
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
    // this.changeFoodType = this.changeFoodType.bind(this);

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
    
    const response = await axios.get(`${API_URL}?location=${this.state.location}&term=${this.state.term}&limit=${this.state.limit}`);
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
    mymap = L.map('mapid').setView([lat[0], long[0]], 12);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);
    
    const mexicoIcon = L.icon({
      iconUrl:  'https://cdn.countryflags.com/thumbs/mexico/flag-3d-round-250.png',
      iconSize: [50, 50]
    });

    for(var y in data.businesses) {
    L.marker([lat[y], long[y]], { icon: mexicoIcon, title: this.state.restaurants[y].name }).addTo(mymap);
    }
    // .then(response => console.log(response.data.businesses));
    // const results = response.data
    // console.log(data.businesses);
  }
  
  handleInputChange = (event) => {
    // event.preventDefault()
    axios.get(`${API_URL}?location=${event.target.value}&term=${this.state.term}&limit=${this.state.limit}`)
    .then((response) => {
      // setTimeout(() => {
        console.log(response.data.businesses);
        if(response.data.businesses.length === 0) {
          mymap.remove();
          lat = 0;
          long = 0;

          mymap = L.map('mapid').setView([lat, long], 12);
          const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
          const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
          const tiles = L.tileLayer(tileUrl, { attribution });
          tiles.addTo(mymap);
        } else {

        
        mymap.remove();
        lat = [];
        long = [];
      
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
      mymap = L.map('mapid').setView([lat[0], long[0]], 12);const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const tiles = L.tileLayer(tileUrl, { attribution });
      tiles.addTo(mymap);
      console.log(lat);
      const mexicoIcon = L.icon({
        iconUrl:  'https://cdn.countryflags.com/thumbs/mexico/flag-3d-round-250.png',
        iconSize: [50, 50]
      });
      const indiaIcon = L.icon({
        iconUrl:  'https://cdn.countryflags.com/thumbs/india/flag-3d-round-250.png',
        iconSize: [50, 50]
      });
      const chinaIcon = L.icon({
        iconUrl:  'https://cdn.countryflags.com/thumbs/china/flag-3d-round-250.png',
        iconSize: [50, 50]
      });
      const thaiIcon = L.icon({
        iconUrl:  'https://cdn.countryflags.com/thumbs/thailand/flag-3d-round-250.png',
        iconSize: [50, 50]
      });
      const vietnamIcon = L.icon({
        iconUrl:  'https://cdn.countryflags.com/thumbs/vietnam/flag-3d-round-250.png',
        iconSize: [50, 50]
      });
      if(this.state.term === "mexican") {
      for(var a in response.data.businesses) {
        L.marker([lat[a], long[a]], { icon: mexicoIcon, title: this.state.restaurants[a].name  }).addTo(mymap);
        }} else if(this.state.term === 'indian') {
      for(var b in response.data.businesses) {
        L.marker([lat[b], long[b]], { icon: indiaIcon, title: this.state.restaurants[b].name  }).addTo(mymap);
        }} else if(this.state.term === 'chinese'){
      for(var c in response.data.businesses) {
        L.marker([lat[c], long[c]], { icon: chinaIcon, title: this.state.restaurants[c].name  }).addTo(mymap);
        }} else if(this.state.term === 'thai'){
      for(var d in response.data.businesses) {
        L.marker([lat[d], long[d]], { icon: thaiIcon, title: this.state.restaurants[d].name  }).addTo(mymap);
        }} else if(this.state.term === 'vietnamese'){
      for(var e in response.data.businesses) {
        L.marker([lat[e], long[e]], { icon: vietnamIcon, title: this.state.restaurants[e].name  }).addTo(mymap);
        }
      }
    }})
  .catch(function (error) {
    console.log(error);
  });
  // this.setState({
    //   location: event.target.value
    // });
    // console.log(this.state.location);
    // console.log(this.state.restaurants)
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  changeFoodTypeMexican = () => {
    this.setState({term: "mexican"})
  };

  changeFoodTypeIndian = () => {
    this.setState({term: "indian"})
  };

  changeFoodTypeChinese = () => {
    this.setState({term: "chinese"})
  };

  changeFoodTypeThai = () => {
    this.setState({term: "thai"})
  };

  changeFoodTypeVietnamese = () => {
    this.setState({term: "vietnamese"})
  };
  
  render() {
    return (
      <div className="all-content">
        <div className="left-content">
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form">
              <div>
                <h1 className="search-label">Find Spicy <em className="food-word">{this.state.term}</em>   Food Near Me</h1>
                <input id='form-input' type="text" placeholder='City, State' onChange={this.handleInputChange}/>
              </div>
            </form>
          </div>
          <div className="food-buttons-container">
            <button onClick={this.changeFoodTypeMexican} className="food-button">Mexican</button>
            <button onClick={this.changeFoodTypeIndian} className="food-button">Indian</button>
            <button onClick={this.changeFoodTypeChinese} className="food-button">Chinese</button>
            <button onClick={this.changeFoodTypeThai} className="food-button">Thai</button>
            <button onClick={this.changeFoodTypeVietnamese} className="food-button">Vietnamese</button>
          </div>
          <div className="restaurants">
            <div className="restaurants-content">
              {this.state.restaurants.map((rest, key) => 
                <Item rest={rest} key={key} />
              )}
            </div>
          </div>
          <div className='access-btn'>
            <a href="https://cors-anywhere.herokuapp.com/corsdemo" className="food-button cors">Click for Temporary Access</a>
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