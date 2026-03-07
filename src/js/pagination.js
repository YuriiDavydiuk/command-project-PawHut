import { allAnimals } from './product.js';
import { renderAnimalCards } from './render.js';

const BASE_URL = 'https://paw-hut.b.goit.study/api';
const ENDPOINT = 'animals';
const buttonMore = document.querySelector('.tails-btn');
const animalsList = document.querySelector('.tails-products');
let page = 2;
let totalPages = 1;

function getLimit() {
  if (window.innerWidth >= 1440) {
    return 9;
  }
  return 8;
}
async function getAnimals(page, limit) {
  const response = await fetch(
    `${BASE_URL}/${ENDPOINT}?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
// // //   розмітка
// function createMarkup(animals) {
//   const markup = animals
//     .map(
//       ({ _id, species, name, categories, age, gender, behavior, image }) => `
//     <li class="product-card">
//     <img class="product-img" src="${image}" alt="${name}"/>
//     <div class="card-top-group">
//      <p class="product-species">${species}</p>
//      <h3 class="product-name">${name}</h3>
//      <div class="product-filter">
//      <span class="product-filter-btn">
//       ${categories?.[0]?.name ?? ''}
//      </span>
//       </div>
//     <div class="product-age-gender">
//      <span class="product-age">${age}</span>
//         <span>${gender}</span>
//      </div>
//      </div>
//    <div class="spacer"></div>
//    <div class="card-bottom-group">
//     <p class="product-description">${behavior}</p>
//     <button class="btn-more" data-id="${_id}" >Дізнатись більше
//     </button>
//     </div>
//      </li>
//     `
//     )
//     .join('');
//   animalsList.insertAdjacentHTML('beforeend', markup);
// }

// // завантаження
async function loadMore() {
  try {
    buttonMore.disabled = true;
    // buttonMore.style.cursor = 'wait';
    const limit = getLimit();
    const data = await getAnimals(page, limit);
    allAnimals.push(...data.animals);

    renderAnimalCards(data);
    totalPages = data.totalPages;
    if (page >= totalPages) {
      buttonMore.style.display = 'none';
    }
    page += 1;
  } catch (error) {
    console.error('Error loading animals:', error);
  } finally {
    buttonMore.disabled = false;
  }
}
buttonMore.addEventListener('click', loadMore);
