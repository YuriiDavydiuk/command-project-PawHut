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

async function getAnimalProducts() {
  try {
    const data = await fetchAnimals();

    renderAnimalCards(data);
  } catch (error) {
    console.log(error);
  }
}
