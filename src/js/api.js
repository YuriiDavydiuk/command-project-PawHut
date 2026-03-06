import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constans';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios(ENDPOINTS.categories);

  return data;
};

export const fetchAnimals = async () => {
  const { data } = await axios(ENDPOINTS.animals);

  return data;
};

export const fetchFeedbacks = async () => [];
