// let page = 1;
// let totalPages = 1;

// import { fetchAnimals } from './api';
// import { refs } from './refs';
// import { renderAnimalCards } from './render';

// refs.tailsBtn.addEventListener('click', loadMore);

// function getLimit() {
//   if (window.innerWidth >= 1440) {
//     return 9;
//   }
//   return 8;
// }

// // завантаження
// export async function loadMore() {
//   try {
//     page += 1;
//     refs.tailsBtn.disabled = true;
//     // buttonMore.style.cursor = 'wait';
//     const limit = getLimit();
//     const data = await fetchAnimals(page, limit);
//     renderAnimalCards(data);
//     totalPages = data.totalPages;
//     if (page >= totalPages) {
//       refs.tailsBtn.style.display = 'none';
//     }
//   } catch (error) {
//     console.error('Error loading animals:', error);
//   } finally {
//     refs.tailsBtn.disabled = false;
//   }
// }
