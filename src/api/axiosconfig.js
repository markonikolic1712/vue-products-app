import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

async function GET(path) {
  try {
    const response = await axios.get(BASE_URL + path);
    if (response.data) return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const api = { GET };

export default api;
