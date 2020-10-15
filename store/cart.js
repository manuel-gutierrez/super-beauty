export const state = () => ({
  counter: 3,
  freeShippingValue: 600000,
  products: [
    {
      id: '3aad1a64-2e96-40fe-9838-97af5cde903e',
      qty: 2,
      price: { amount: 60000, currency: 'COP' },
      total: 60000,
    },
    {
      id: '6eff8473-885a-44ae-85cd-3aa39060fed1',
      qty: 1,
      price: { amount: 60000, currency: 'COP' },
      total: 60000,
    },
    {
      id: '14e1ae62-9144-4493-b883-e892f5cd6c66',
      qty: 4,
      price: { amount: 60000, currency: 'COP' },
      total: 60000,
    },
  ],
  totals: {
    subtotal: 0,
    discount: 0,
    taxes: 0,
    total: 650000,
  },
});
export const mutations = {
  incrementCartCounter(state) {
    state.counter++;
  },
  decrementCartCounter(state) {
    if (state.counter > 0) {
      state.counter--;
    }
  },
  emptyCart(state) {
    state.counter = 0;
  },
  addProductToCart(state, payload) {
    state.products.push(payload);
  },
  updateProductInCart(state, payload) {
    const productItem = state.products.find(
      (product) => product.id === payload.id
    );
    productItem.qty = payload.qty;
  },
  removeProductFromCart(state, payload) {
    state.products = state.products.filter((product) => {
      return product.id !== payload.id;
    });
  },
};
export const actions = {
  addToCart({ commit, state }, payload) {
    const productItem = state.products.find(
      (product) => product.id === payload.id
    );
    if (!productItem && payload.qty > 0) {
      commit('addProductToCart', payload);
      commit('incrementCartCounter');
    } else if (productItem && productItem.qty !== payload.qty) {
      commit('updateProductInCart', payload);
    }
  },
  removeFromCart({ commit }, payload) {
    commit('removeProductFromCart', payload);
    commit('decrementCartCounter');
  },
};

export const getters = {
  getCartCounter(state) {
    return state.counter;
  },
  getFreeShippingValue(state) {
    return state.freeShippingValue;
  },
  getCartItems(state) {
    return state.products;
  },
  getTotals(state) {
    return state.totals;
  },
  getItemQty: (state) => (id) => {
    const item = state.products.find((product) => product.id === id);
    if (item) {
      return item.qty;
    } else {
      return false;
    }
  },
};
