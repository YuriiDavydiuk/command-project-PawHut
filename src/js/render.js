import { refs } from './refs';

// рендер категорій наші хвостики
export function renderCategories(category) {
  const markup = category
    .map(
      ({ _id, name }) => `
<li class="category-item" data-id="${_id}">
    <button type="button" class="category-btn">${name}</button>
</li>`
    )
    .join('');

  refs.tailsFilters.innerHTML = markup;
}

// рендер карток наші хвостики
export function renderAnimalCards(products) {
  const murkup = products.animals
    .map(
      ({
        _id,
        image,
        name,
        categories,
        age,
        gender,
        shortDescription,
        description,
        species,
      }) => `
    <li class="product-card" data-id="${_id}">
        <div class="card-top-group">
        <img class="product-img" src="${image}" alt=${description}/>
        <p class="product-species">${species}</p>
        <h3 class="product-name">${name}</h3>
        <p class="product-filter">${categories
          .map(
            ({ name }) => `
          <button type="button" class="product-filter-btn">${name}</button>`
          )
          .join('')}
        </p>
          </div>
              <div class="spacer"></div>
              <div class="card-bottom-group">
        <p class="product-age-gender"><span class="product-age">${age}</span><span class="product-gender">${gender}</span></p>
        <p class="product-description">${shortDescription}</p>
        <button
        class="btn-more"
        data-modal-open="details"
        data-id="${_id}"
      >
        Дізнатись більше
      </button>
       </div>
    </li>`
    )
    .join('');

  refs.tailsProducts.insertAdjacentHTML('beforeend', murkup);
}

export function clearAnimalsCards() {
  refs.tailsProducts.innerHTML = '';
}

// Функции для возврата контента
export function renderDetailsHTML(pet) {
  return `
    <div class="backdrop is-open">
       <div class="animal-modal">
    <button class="modal-close-btn" data-modal-close type="button">
          <svg class="modal-close-icon" width="24" height="24">
          <use href="./img/icons.svg#icon-mobile-menu-close"></use>
          <!--  <use href="/img/icons.svg#icon-close"></use> -->
          </svg>
        </button>

      <div class="image-wrapper">
        <img src="${pet.image}" alt="${pet.name}" class="animal-img" />
      </div>
      <div class="info-wrapper">
        <div class="animal-data">
          <p class="animal-type">${pet.species}</p>
          <h2 class="animal-name">${pet.name}</h2>
          <div class="animal-meta">
            <p class="meta-item age">${pet.age}</p>
            <p class="meta-item gender">${pet.gender}</p>
          </div>
        </div>
        <div class="description-section">
          <h3 class="description-title">Опис:</h3>
          <p class="animal-dscr description-text">${pet.description}</p>
        </div>
        <div class="description-section">
          <h3 class="description-title">Здоров'я:</h3>
          <p class="health-dscr description-text">${pet.healthStatus}</p>
        </div>
        <div class="description-section">
          <h3 class="description-title">Поведiнка:</h3>
          <p class="behavior-dscr description-text">${pet.behavior}</p>
        </div>
         <button class="btn-primary btn-to-order" data-modal-next="order" type="button">
            Взяти додому
          </button>
      </div>
    </div>
    </div>`;
}
