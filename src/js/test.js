// import axios from 'axios';

// axios.defaults.baseURL = 'https://paw-hut.b.goit.study/api';

// export async function fetchCategories() {
//   const { data } = await axios.get('/categories');
//   const res = [{ _id: 'all', name: 'Всі' }, ...data];

//   return res;
// }

// export async function fetchAnimals({ page = 1, categoryId = null } = {}) {
//   const isDesktop = window.matchMedia('(min-width: 1440px)').matches;
//   const limit = isDesktop ? 9 : 8;
//   const { data } = await axios.get('/animals', {
//     params: { page, limit, categoryId },
//   });

//   return data;
// }

////////////////////////////////////////////////////////////////
// // export const refs = {
//   categories: document.querySelector('.categories'),
//   animals: document.querySelector('.animals'),
// };

//////////////////////////////////////////////////////////////////////////
// export function renderCategories(arr) {
//   return arr
//     .map(
//       item => `
//   <li class="categories-item">
//     <button
//       class="categories-btn ${item._id === 'all' ? 'categories-btn--active' : ''}"
//       type="button"
//       data-id="${item._id}">
//       ${item.name}
//     </button>
//   </li>
// `
//     )
//     .join('');
// }

// export function renderAnimals(arr) {
//   return arr
//     .map(
//       ({ _id, species, name, categories, age, gender, behavior, image }) => `
//     <li class="animal-card">
//       <img class="animal-card__img" src="${image}" alt="${name}">
//       <div class="animal-card__body">
//         <p class="animal-card__species">${species}</p>
//         <h3 class="animal-card__name">${name}</h3>
//         <span class="animal-card__category">${categories[0]?.name ?? ''}</span>
//         <div class="animal-card__info">
//           <span>${age}</span>
//           <span>${gender}</span>
//         </div>
//         <p class="animal-card__behavior">${behavior}</p>
//         <button class="animal-card__btn" type="button" data-id="${_id}">
//           Дізнатись більше
//         </button>
//       </div>
//     </li>
//   `
//     )
//     .join('');
// }

//////////////////////////////////////////////////////////////////

//
// <section class="our-tails">
// <div class="container">
//     <h2 class="our-tails-title">Наші хвостики</h2>
//     <p class="our-tails-description">Вони дуже чекають на знайомство з вами</p>
//     <ul class="categories"></ul>
//     <ul class="animals"></ul>
// </div>
// </section>;

//////////////////////////////////////////////////////////////////
// .our-tails .container {
//   padding: 64px 20px 32px;
// }

// .our-tails-title {
//   font-family: 'Open Sans', sans-serif;
//   font-weight: 700;
//   font-size: 36px;
//   line-height: 1.2;
//   letter-spacing: -0.01em;
//   text-align: center;
//   color: #02060a;
//   margin-bottom: 16px;
// }

// .our-tails-description {
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 16px;
//   text-align: center;
//   color: #02060a;
//   margin-bottom: 32px;
// }

// .categories {
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   list-style: none;
//   padding: 0;
//   margin-bottom: 32px;
// }

// .categories-btn {
//   padding: 10px 16px;
//   border: none;
//   border-radius: 100px;
//   background: transparent;
//   cursor: pointer;
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 14px;
//   color: #02060a;
// }

// .categories-btn--active {
//   background: #eee9e3;
//   font-weight: 500;
// }

// .animals {
//   display: grid;
//   gap: 32px;
//   list-style: none;
//   padding: 0;
//   margin: 0;
// }

// .animal-card {
//   display: flex;
//   flex-direction: column;
//   background: #eee9e3;
//   border-radius: 16px;
//   padding: 12px;
// }

// .animal-card__img {
//   width: 100%;
//   height: 245px;
//   object-fit: cover;
//   border-radius: 8px;
// }

// .animal-card__body {
//   display: flex;
//   flex-direction: column;
//   flex-grow: 1;
//   gap: 6px;
// }

// .animal-card__species {
//   font-size: 10px;
//   margin: 0;
// }

// .animal-card__name {
//   font-family: 'Open Sans', sans-serif;
//   font-weight: 700;
//   font-size: 20px;
//   margin: 0;
// }

// .animal-card__category {
//   display: inline-block;
//   padding: 4px 10px;
//   border: 1px solid #02060a;
//   border-radius: 100px;
//   font-size: 10px;
//   background: rgba(2, 6, 10, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0);
//   width: 56px;
//   height: 23px;
// }

// .animal-card__info {
//   display: flex;
//   gap: 16px;
//   font-size: 10px;
// }

// .animal-card__behavior {
//   font-size: 12px;
//   line-height: 1.5;
// }

// .animal-card__btn {
//   margin-top: auto;
//   width: 100%;
//   height: 40px;
//   border: 1px solid #02060a;
//   border-radius: 8px;
//   background: transparent;
//   font-size: 14px;
//   cursor: pointer;
// }

// @media (min-width: 768px) {
//   .our-tails .container {
//     padding: 64px 32px 32px;
//   }

//   .animals {
//     grid-template-columns: repeat(2, 1fr);
//   }
// }

// @media (min-width: 1440px) {
//   .our-tails .container {
//     padding: 80px 64px 32px;
//   }

//   .animals {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   .animal-card {
//     height: 613px;
//   }
//   .animal-card__img {
//     height: 309px;
//   }

//  }
