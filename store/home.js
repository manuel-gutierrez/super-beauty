export const state = () => ({
  banners: {
    carousel: {},
    promo_1: {
      type: 'promo',
      data: {
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
    promo_2: {
      type: 'promo',
      data: {
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
    promo_3: {
      type: 'promo-large',
      data: {
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
          src: '/images/banner/banner_image_promo_large.png',
        },
        button: {
          text: 'Ver más',
          url: '/products',
        },
      },
    },
  },
});
export const mutations = {};
export const actions = {
  // For future use.
};

export const getters = {
  getBanners(state) {
    return state.banners;
  },
};
