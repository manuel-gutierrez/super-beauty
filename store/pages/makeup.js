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
  filters: {
    brands: {
      display: 'list',
      label: 'Marcas',
      type: 'BRAND',
      active: true,
      options: [
        { text: 'Orange', value: '1' },
        { text: 'Apple', value: '2' },
        { text: 'Pineapple', value: '3' },
        { text: 'Grape', value: '4' },
        { text: 'Pineapple', value: '5' },
        { text: 'Grape', value: '6' },
        { text: 'Pineapple', value: '7' },
        { text: 'Grape', value: '8' },
        { text: 'Pineapple', value: '9' },
        { text: 'Grape', value: '10' },
        { text: 'Pineapple', value: '11' },
        { text: 'Grape', value: '12' },
        { text: 'Pineapple', value: '13' },
        { text: 'Grape', value: '14' },
        { text: 'Pineapple', value: '15' },
        { text: 'Grape', value: '16' },
        { text: 'Pineapple', value: '17' },
        { text: 'Grape', value: '18' },
        { text: 'Pineapple', value: '19' },
        { text: 'Grape', value: '20' },
      ],
    },
    price: {
      display: 'range',
      label: 'Precio',
      type: 'PRICE',
      active: true,
      options: [{ floor: 0 }, { ceil: 120000 }],
    },
    rating: {
      display: 'rating-list',
      label: 'Calificación',
      active: true,
      type: 'RATING',
      options: [],
    },
    others: {
      display: 'list',
      label: 'Otros',
      active: true,
      type: 'OTHER',
      options: [
        { text: 'Promoción', value: { inSale: true } },
        { text: 'Disponible', value: { available: true } },
        { text: 'Pineapple', value: '3' },
        { text: 'Grape', value: '4' },
      ],
    },
  },
});
export const mutations = {
  setSortingValue(state, payload) {
    state.sort.selected = payload;
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
  getFilters(state) {
    return state.filters;
  },
};
