export const state = () => ({
  banners: {
    header: {
      type: 'page-header',
      data: {
        url: '/productos',
        caption: {
          title: 'Maquillaje',
        },
        image: {
          src: '/images/banner/banner_image_promo_large.png',
        },
      },
    },
  },
  sort: {
    buttonText: 'Calificación',
    sortLabel: 'Ordenar por:',
    productCounterLabel: 'Productos',
  },
});
export const mutations = {};
export const actions = {
  // For future use.
};

export const getters = {
  getSortSection(state) {
    return state.sort;
  },
  getBanners(state) {
    return state.banners;
  },
};
