import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchAnimals, fetchCategories } from './api';
import { accentBtn, activeFirstBtn } from './helpers';
import {
  clearAnimalsCards,
  renderAnimalCards,
  renderCategories,
} from './render';
import { refs } from './refs';
import { state, getLimit, resetPagination } from './state';

init();

async function init() {
  await loadCategories();
  await loadAnimals();
}

async function loadCategories() {
  try {
    showLoader();
    const categories = await fetchCategories();
    renderCategories([{ name: 'Всі', _id: 'all' }, ...categories]);
    activeFirstBtn();
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topCenter' });
  } finally {
    hideLoader();
  }
}

function showLoader() {
  if (refs.loader) refs.loader.classList.remove('is-hidden');
  if (refs.tailsBtn) refs.tailsBtn.classList.add('is-hidden');
}
function hideLoader() {
  if (refs.loader) refs.loader.classList.add('is-hidden');
}

async function loadAnimals() {
  try {
    showLoader();

    const limit = getLimit();
    const data = await fetchAnimals({
      page: state.currentPage,
      limit,
      categoryId: state.currentCategoryId,
    });

    state.totalPages = Math.ceil(data.totalItems / limit);
    state.loadedAnimals.push(...data.animals);

    renderAnimalCards(data);
    updateLoadMoreBtn(data);
  } catch (error) {
    iziToast.error({ message: error.message, position: 'topCenter' });
  } finally {
    hideLoader();
  }
}

function updateLoadMoreBtn(data) {
  const noMore =
    state.currentPage >= state.totalPages || data.animals.length === 0;

  if (noMore) {
    refs.tailsBtn.classList.add('is-hidden');
  } else {
    refs.tailsBtn.classList.remove('is-hidden');
  }
}

refs.tailsFilters.addEventListener('click', async evt => {
  const btn = evt.target.closest('.category-btn');
  if (!btn) return;

  const categoryItem = btn.closest('.category-item');
  const newCategoryId =
    categoryItem.dataset.id === 'all' ? null : categoryItem.dataset.id;

  if (newCategoryId === state.currentCategoryId) return;

  accentBtn(btn);
  state.currentCategoryId = newCategoryId;
  resetPagination();
  clearAnimalsCards();
  // refs.tailsBtn.classList.remove('is-hidden');
  await loadAnimals();
});

refs.tailsBtn.addEventListener('click', async () => {
  state.currentPage += 1;
  await loadAnimals();
});

export function getLoadedAnimals() {
  return state.loadedAnimals;
}
