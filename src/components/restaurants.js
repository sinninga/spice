import React, {useState, useEffect} from 'react';

function Restaurants() {

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch('GET https://api.yelp.com/v3/businesses/search?term=spicy&location=colorado&limit=5');
    
    const items = await data.json();
    console.log(items);
  }

  return (
    <div className="restaurants">
      Restaurants Page
    </div>
  );
}

export default Restaurants;