import fetchYelpData from '/.utils/yelpApi.js';

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { location, term, limit } = req.query;
      const apiKey = process.env.REACT_APP_YELP_KEY;

      const yelpData = await fetchYelpData(location, term, limit, apiKey);

      res.status(200).json(yelpData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data from Yelp API' });
    }
  } else {
    res.status(405).end();
  }
};