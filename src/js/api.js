import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constans';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const { data } = await axios(ENDPOINTS.categories);
  return data;
};

export const fetchAnimals = async ({
  page = 1,
  limit = 9,
  categoryId = null,
} = {}) => {
  const params = { page, limit };
  if (categoryId) params.categoryId = categoryId;

  const { data } = await axios(ENDPOINTS.animals, { params });
  return data;
};

export const submitOrder = async payload => {
  const { data } = await axios.post(ENDPOINTS.orders, payload);
  return data; }
export const fetchFeedbacks = async ({ page = 1, limit = 12 } = {}) => {
  const { data } = await axios(ENDPOINTS.feedbacks, {
    params: {
      page,
      limit,
    },
  });
  return data.feedbacks ?? [];
};
