export const renderAnimalCards = animals => {};
export const renderCategories = categories => {};

// Функции для возврата контента
export function renderDetailsHTML(pet) {
  return `
    <div class="backdrop is-open">
       <div class="animal-modal">
    <button class="modal-close-btn" data-modal-close type="button">
          <svg class="modal-close-icon" width="24" height="24">
            <use href="./img/icons.svg#icon-close"></use>
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
          <p class="short-dscr description-text">${pet.shortDescription}</p>
        </div>
         <button class="btn-primary btn-to-order" data-modal-next="order" type="button">
            Взяти додому
          </button>
      </div>
    </div>
    </div>`;
}

export function renderOrderHTML() {
  return `
    <div class="backdrop is-open">
      <div class="animal-modal enter-bottom">
        <button class="modal-close-btn" data-modal-close>
        <svg class="modal-close-icon" width="24" height="24">
            <use href="./img/icons.svg#icon-close"></use>
          </svg>
          </button>
        <div class="info-wrapper">
          <h2>Залишіть заявку</h2>
          <p>Форма здесь...</p>
        </div>
      </div>
    </div>`;
}
