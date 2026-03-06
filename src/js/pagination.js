// const BASE_URL = 'https://paw-hut.b.goit.study/api';
// const buttonMore = document.querySelector('.js-button-more');
// const animalsList = document.querySelector('.animals-list');
// let page = 1;
// const limit = getLimit();
// function getLimit() {
//   if (window.innerWidth >= 1440) {
//     return 9;
//   }
//   return 8;
// }
// async function getAnimals() {
//   const response = await axios(
//     `${BASE_URL}/animals?page=${page}&limit=${limit}`
//   );
//   return response.data;
// }

// //   розмітка
// function createMarkup(animals) {
//   const markup = animals
//     .map(({ _id, name, species, categories, age, gender, behavior, image }) => {
//       return `
//     <li class="animal-card">
//     <img class="animal-img" src="${image}" alt="${name}"/>
//      <p class="animal-species">${species}</p>
//      <h3 class="animal-name">${name}</h3>
//      <span class="animal-category"> ${categories?.[0]?.name ?? ''} </span>
//     <div class="card-info">
//      <span>${age}</span>
//         <span>${gender}</span>
//      </div>
//     <p class="animal-behavior">${behavior}</p>
//     <button class="btn-more" data-id="${_id}" >Дізнатись більше 
//     </button>
//      </li>
//     `;
//     })
//     .join('');
//   animalsList.insertAdjacentHTML('beforeend', markup);
// }
// // завантаження
// async function loadMore() {
//   try {
//     const animals = await getAnimals();
//     createMarkup(animals);
//     page++;
//     if (animals.length < limit) {
//       buttonMore.style.display = 'none';
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }
// buttonMore.addEventListener('click', loadMore);
// loadMore();
