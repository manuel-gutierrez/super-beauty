export const state = () => ({
  counter: 0,
});
export const mutations = {
  incrementCartCounter(state) {
    state.counter++;
  },
  emptyCart(state) {
    state.counter = 0;
  },
};
export const actions = {
  // For future use.
};

export const getters = {
  getCartCounter(state) {
    return state.counter;
  },
};
