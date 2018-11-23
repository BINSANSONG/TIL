import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 8df7eb145d8423729239317a3ec121d301f4e7ee1e9f2224e925a2f659d2b859"
  },
});

