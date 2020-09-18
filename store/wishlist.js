export const state = () => ({
  counter: 0,
});
export const mutations = {
  incrementWishlistCounter(state) {
    state.counter++;
  },
  emptyWishlist(state) {
    state.counter = 0;
  },
};
export const actions = {
  // For future use.
};

export const getters = {
  getWishListCounter(state) {
    return state.counter;
  },
};
