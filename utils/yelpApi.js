const fetchYelpData = async (location, term, limit, apiKey) => {
    const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&limit=${limit}`;
    const headers = new Headers({
      'Authorization': `Bearer ${apiKey}`,
    });
  
    try {
      const response = await fetch(apiUrl, { method: 'GET', headers: headers });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data from Yelp API. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch data from Yelp API');
    }
  };
  
  export default fetchYelpData;  