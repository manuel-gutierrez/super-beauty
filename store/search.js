export const state = () => ({
  popularSearchTags: [
    'labial Afterglow',
    'cloud paint',
    'milky jelly cleanser',
    'Corrector cremoso',
  ],
});

export const getters = {
  getPopularSearchTags(state) {
    return state.menu;
  },
};
