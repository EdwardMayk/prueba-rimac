import axios from 'axios';

export const getPlans = async () => {
  try {
    const url = `https://rimac-front-end-challenge.netlify.app/api/plans.json`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

