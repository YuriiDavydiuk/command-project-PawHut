import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constans';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios(ENDPOINTS.categories);

  return data;
};

export async function fetchAnimals(page = 1, limit = 9) {
  const response = await fetch(
    `${BASE_URL}${ENDPOINTS.animals}?page=${page}&limit=${limit}`
  );

  return response.json();
}

export const fetchFeedbacks = async () => [];
