export const state = () => ({
  isLoggedIn: false,
  token: '1321231231231231231231',
  userId: 'a527798b-d34e-45b0-a0ee-86316afd269a',
});
export const mutations = {
  toggleLoginStatus(state) {
    state.isLoggedIn = !state.isLoggedIn;
  },
};
export const actions = {
  // For future use.
};

export const getters = {
  getCurrentLoginStatus(state) {
    return state.isLoggedIn;
  },
  getSessionToken(state) {
    return state.token;
  },
};
