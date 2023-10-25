import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { location, term, limit } = req.query;
      const yelp_key = process.env.REACT_APP_YELP_KEY;

      const apiUrl = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&limit=${limit}`;
      const headers = {
        Authorization: `Bearer ${yelp_key}`,
      };

      const response = await axios.get(apiUrl, { headers });

      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data from Yelp API' });
    }
  } else {
    res.status(405).end(); 
  }
};