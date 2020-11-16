export const state = () => ({
  banners: {},
  headers: {
    firstSection: 'LOS MÁS VENDIDOS',
    secondSection: 'Recomendados Superbeauty',
    thirdSection: 'OFERTAS',
  },
});
export const mutations = {
  setBanners(state, banners) {
    state.banners = { ...state.banners, ...banners };
  },
};
export const actions = {
  // For future use.
};

export const getters = {
  getBanners(state) {
    return state.banners;
  },
  getHeaders(state) {
    return state.headers;
  },
};
