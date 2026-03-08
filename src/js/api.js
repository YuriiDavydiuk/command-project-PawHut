import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constans';

axios.defaults.baseURL = BASE_URL;

// обробка запиту trycatch буде відбуватися там, де ми будем викликати ці функціїї
export const fetchCategories = async () => {
  const { data } = await axios(ENDPOINTS.categories);

  return data;
};

export async function fetchAnimals(page = 1, limit) {
  const response = await fetch(
    `${BASE_URL}${ENDPOINTS.animals}?page=${page}&limit=${limit}`
  );

  return response.json();
}

export async function fetchAnimalsByCategory(categoryId, page = 1, limit) {
  const { data } = await axios(
    `${ENDPOINTS.animals}?categoryId=${categoryId}&page=${page}&limit=${limit}`
  );

  return data;
}

export const fetchFeedbacks = async () => [];
