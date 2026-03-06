import { fetchAnimals, fetchCategories } from './api';
import { activeFirstBtn } from './helpers';
import { renderAnimalCards, renderCategories } from './render';

getCategories();
getAnimalProducts();

async function getCategories() {
  try {
    const res = await fetchCategories();

    renderCategories([{ name: 'Всі', _id: 'all' }, ...res]);

    activeFirstBtn();
  } catch (error) {
    console.log(error);
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
  }
}
