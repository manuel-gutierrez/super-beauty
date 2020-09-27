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
          src: '/images/pages/product/product_banner@2x.png',
        },
      },
    },
  },
  sort: {
    selected: 'rate',
    sortOptions: [
      { value: null, text: 'Selecciona un opcion' },
      { value: 'rate', text: 'Calificación' },
      { value: 'price', text: 'Precio' },
    ],
    sortLabel: 'Ordenar por:',
    productCounterLabel: 'Productos',
  },
});
export const mutations = {
  setSortingValue(state, payload) {
    state.sort.selected = payload;
  },
  pushProducts(state, payload) {
    state.products.push(payload);
  },
};
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
