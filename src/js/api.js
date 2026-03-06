import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constans';

axios.defaults.baseURL = BASE_URL;

// обробка запиту trycatch буде відбуватися там, де ми будем викликати ці функціїї
export const fetchCategories = async () => {
  const { data } = await axios(ENDPOINTS.categories);

  return data;
};

export const fetchAnimals = async () => {
  const { data } = await axios(ENDPOINTS.animals);

  return data;
};

export async function fetchAnimalsByCategory(categoryId) {
  const { data } = await axios(ENDPOINTS.animals, {
    params: {
      categoryId,
    },
  });

  return data;
}

export const fetchFeedbacks = async () => [];

// 1. ДАННЫЕ РЕКСА (не смогла подключить API)
const mockData = {
  _id: '667ad1b8e4b01a2b3c4d5e01',
  name: 'Рекс',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFx65EkJT0vcMtlDOCihKok2b8o0iIXQtCKw&s',
  species: 'Собака',
  age: '3 роки',
  gender: 'Хлопчик',
  behavior: 'Дуже добрий та позитивний. Любить людей та інших тварин.',
  healthStatus:
    'Артрит, потребує знеболювальних препаратів. Серце в нормі для його віку.',
  shortDescription:
    'Старенький пес з артритом. Шукає тихий дім, щоб дожити віку в любові.',
  description:
    'Лорд все життя вірно служив своїм господарям, але вони померли. Він дуже спокійний та мудрий пес. Через артрит йому важко ходити по сходах. Він не потребує довгих прогулянок, лише теплого місця та люблячого серця поруч.',
};

// Запрос по конкретному ID для MW но пока имитация
export const fetchPetById = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === mockData._id) {
        resolve(mockData);
      } else {
        reject(new Error('Тваринку не знайдено'));
      }
    }, 1000);
  });
};
