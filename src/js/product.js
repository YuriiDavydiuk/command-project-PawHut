import iziToast from 'izitoast';
import { fetchAnimals, fetchAnimalsByCategory, fetchCategories } from './api';
import { accentBtn, activeFirstBtn } from './helpers';
import {
  clearAnimalsCards,
  renderAnimalCards,
  renderCategories,
} from './render';
import { refs } from './refs';

let page = 1;
let categoryId = 'all';
export let allAnimals = [];

// Отримуємо актуальний ліміт залежно від екрану
function getLimit() {
  return window.innerWidth >= 1440 ? 9 : 8;
}

// 1. Початкове завантаження
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

getCategories();
getAnimalProducts();

refs.tailsFilters.addEventListener('click', getAnimalsByCategory);
refs.tailsBtn.addEventListener('click', onLoadMore);

async function getAnimalsByCategory(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const category = evt.target.closest('.category-item');
  categoryId = category.dataset.id;

  accentBtn(evt.target);
  page = 1; // Скидаємо сторінку до першої
  const limit = getLimit(); // Отримуємо актуальний ліміт
  refs.tailsBtn.disabled = false;
  try {
    // Універсальний запит: якщо 'all', викликаємо fetchAnimals, інакше - за категорією
    const data =
      categoryId === 'all'
        ? await fetchAnimals(page, limit)
        : await fetchAnimalsByCategory(categoryId, page, limit);

    // ОСЬ ТУТ ТЕЖ ПРАВКА:
    // Оскільки ми очищуємо екран (clearAnimalsCards),
    // то і масив allAnimals маємо почати "з чистого аркуша"
    allAnimals = data.animals;

    // Очищення та рендер робимо один раз в кінці
    clearAnimalsCards();
    renderAnimalCards(data);
    // Порада: тут можна додавати логіку приховування кнопки "Load More",
    // якщо (data.page >= data.totalPages)
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

async function onLoadMore() {
  page++;
  const limit = getLimit(); // Завжди беремо актуальний ліміт
  refs.tailsBtn.disabled = false;
  try {
    const data =
      categoryId === 'all'
        ? await fetchAnimals(page, limit)
        : await fetchAnimalsByCategory(categoryId, page, limit);

    // ОСЬ ЦЯ ПРАВКА:
    // Ми беремо старих тварин і "розпилюємо" до них нових з data.animals
    allAnimals = [...allAnimals, ...data.animals];

    renderAnimalCards(data);

    const totalPages = Math.ceil(data.totalItems / data.limit);
    console.log('totalPages', totalPages);

    if (data.page >= totalPages) {
      refs.tailsBtn.disabled = true;
      return iziToast.error({
        position: 'topRight',
        message: "We're sorry, there are no more posts to load",
      });
    }
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topCenter' });
  }
}
