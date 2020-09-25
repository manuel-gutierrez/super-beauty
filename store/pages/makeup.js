export const state = () => ({
  banners: {
    promo_1: {
      type: 'promo',
      data: {
        url: '/productos',
        caption: {
          title: 'Brow Powder Duo',
          discount: '-50%',
          description: '',
          button: {
            text: 'Ver más',
            url: '/productos',
          },
        },
        image: {
          src: '/images/banner/banner_image_promo.png',
        },
        button: {
          text: 'Ver más',
          url: '/products',
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
