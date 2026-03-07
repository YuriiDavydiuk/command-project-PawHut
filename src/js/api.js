import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constans';

axios.defaults.baseURL = BASE_URL;

// обробка запиту trycatch буде відбуватися там, де ми будем викликати ці функціїї
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

export async function fetchAnimalsByCategory(categoryId) {
  const { data } = await axios(ENDPOINTS.animals, {
    params: {
      categoryId,
    },
  });

  return data;
}

export const fetchFeedbacks = async ({ page = 1, limit = 12 } = {}) => {
  const { data } = await axios(ENDPOINTS.feedbacks, {
    params: {
      page,
      limit,
    },
  });
  return data.feedbacks ?? [];
};
