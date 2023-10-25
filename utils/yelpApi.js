import axios from 'axios';

const fetchYelpData = async (location, term, limit, apiKey) => {
  const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&limit=${limit}`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await axios.get(apiUrl, { headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from Yelp API');
  }
};

export default fetchYelpData;