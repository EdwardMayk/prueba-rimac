import axios from 'axios';

export const getUser = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/user.json`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

