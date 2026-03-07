import iziToast from 'izitoast';
import { fetchAnimals, fetchAnimalsByCategory, fetchCategories } from './api';
import { accentBtn, activeFirstBtn } from './helpers';
import {
  clearAnimalsCards,
  renderAnimalCards,
  renderCategories,
} from './render';
import { refs } from './refs';

getCategories();
getAnimalProducts();

refs.tailsFilters.addEventListener('click', getAnimalsByCategory);

async function getAnimalsByCategory(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const category = evt.target.closest('.category-item');
  const categoryId = category.dataset.id;

  accentBtn(evt.target);

  try {
    // Універсальний запит: якщо 'all', викликаємо fetchAnimals, інакше - за категорією
    const data =
      categoryId === 'all'
        ? await fetchAnimals()
        : await fetchAnimalsByCategory(categoryId);

    // Очищення та рендер робимо один раз в кінці
    clearAnimalsCards();
    renderAnimalCards(data);
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topCenter',
    });
  }
}

async function getCategories() {
  try {
    const res = await fetchCategories();

    renderCategories([{ name: 'Всі', _id: 'all' }, ...res]);

    activeFirstBtn();
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: error.message,
      position: 'topCenter',
    });
  }
}

export let allAnimals = [];

function getLimit() {
  if (window.innerWidth >= 1440) {
    return 9;
  } else {
    return 8;
  }
}

async function getAnimalProducts() {
  try {
    const limit = getLimit();
    const data = await fetchAnimals(1, limit);
    allAnimals = data.animals;
    renderAnimalCards(data);
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: error.message,
      position: 'center',
    });
  }
}
