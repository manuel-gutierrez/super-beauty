export const state = () => ({
  popularSearchTitle: 'BÚSQUEDAS MÁS POPULARES',
  popularSearchTags: [
    'labial Afterglow',
    'cloud paint',
    'milky jelly cleanser',
    'Corrector cremoso',
  ],
});

export const getters = {
  getPopularSearchTags(state) {
    return state.popularSearchTags;
  },
  getSearchTitle(state) {
    return state.popularSearchTitle;
  },
};
