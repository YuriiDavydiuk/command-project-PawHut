export const state = {
  currentCategoryId: null,
  currentPage: 1,
  totalPages: 1,
  loadedAnimals: [],
};

export function getLimit() {
  return window.innerWidth >= 1440 ? 9 : 8;
}

export function resetPagination() {
  state.currentPage = 1;
  state.totalPages = 1;
  state.loadedAnimals = [];
}
