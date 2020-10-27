export const state = () => ({
  counter: 0,
  products: [],
});
export const mutations = {
  incrementWishlistCounter(state) {
    state.counter++;
  },
  decrementWishlistCounter(state) {
    if (state.counter !== 0) {
      state.counter--;
    }
  },
  emptyWishlist(state) {
    state.counter = 0;
  },
  setWishlistCounter(state, payload) {
    if (payload > 0) {
      state.counter = payload;
    }
  },
  setProducts(state, payload) {
    if (payload.length > 0) {
      state.products = payload;
    }
  },
  addProductToWishlistCart(state, payload) {
    state.products.push({ id: payload });
  },

  removeProductFromWishListCart(state, payload) {
    state.products = state.products.filter((product) => {
      return product.id !== payload;
    });
  },
};
export const actions = {
  // For future use.
};

export const getters = {
  getWishListCounter(state) {
    return state.counter;
  },
  getProductsInCart(state) {
    return state.products;
  },
};
