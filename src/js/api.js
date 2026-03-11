import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios.get(ENDPOINTS.categories);
  return data;
};

export const fetchAnimals = async ({
  page = 1,
  limit = 9,
  categoryId = null,
} = {}) => {
  const params = { page, limit };
  if (categoryId) params.categoryId = categoryId;

  const { data } = await axios.get(ENDPOINTS.animals, { params });
  return data;
};

export const fetchFeedbacks = async ({ page = 1, limit = 12 } = {}) => {
  const { data } = await axios.get(ENDPOINTS.feedbacks, {
    params: {
      page,
      limit,
    },
  });
  return data.feedbacks ?? [];
};

export const submitOrder = async payload => {
  const { data } = await axios.post(ENDPOINTS.orders, payload);
  return data;
};
