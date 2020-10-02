export const state = () => ({
  products: [],
});
export const mutations = {
  async parseProducts(state, payload) {
    state.products = await payload;
  },
  setWishlistStatus(state, payload) {
    const productItem = state.products.find(
      (product) => product.id === payload.id
    );
    productItem.isInWishlist = payload.value;
  },
};
export const actions = {
  updateWishlist({ commit }, payload) {
    commit('setWishlistStatus', payload);
  },
};
export const getters = {
  getProducts(state) {
    return state.products;
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id);
  },
  getRecomendedProducts(state) {
    if (state.products) {
      return state.products.filter((product) => {
        return product.tags.includes('RECOMENDED');
      });
    }
  },
  getProductsInSale(state) {
    if (state.products) {
      return state.products.filter((product) => {
        return product.sale.active === true;
      });
    }
  },
  getTopSaleProducts(state) {
    if (state.products) {
      return state.products.filter((product) => {
        return product.tags.includes('TOPSALE');
      });
    }
  },
  getProductsByCategory: (state) => (categoryId) => {
    return state.products.filter(
      (product) => product.categoryId === categoryId
    );
  },
  filterProductsByVariant: (state) => (
    categoryId,
    subCategoryId,
    variationId,
    products = state.products
  ) => {
    return products.filter(
      (product) =>
        product.categoryId === categoryId &&
        product.subCategoryId === subCategoryId &&
        product.subCategoryVariationId === variationId
    );
  },
  filterProductsByBrand: (state) => (
    categoryId,
    brandId,
    products = state.products
  ) => {
    return products.filter(
      (product) =>
        product.categoryId === categoryId && product.brandId === brandId
    );
  },

  getProductsByRatingRange: (state) => (raitingCeil, raitingFloor) => {
    return state.products.filter(
      (product) =>
        product.rating <= raitingCeil && product.rating >= raitingFloor
    );
  },

  findLowestAndHighestPrices: (state) => (productsArray) => {
    const minValue = (products, fn) =>
      Math.min(
        ...products.map(typeof fn === 'function' ? fn : (val) => val[fn])
      );
    const maxValue = (products, fn) =>
      Math.max(
        ...products.map(typeof fn === 'function' ? fn : (val) => val[fn])
      );
    return {
      min: minValue(productsArray, 'price'),
      max: maxValue(productsArray, 'price'),
    };
  },
};
