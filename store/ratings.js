const axios = require('axios');
export const state = () => ({
  ratings: [],
});
export const mutations = {
  parseRatings(state, payload) {
    state.ratings = payload;
  },
};
export const actions = {
  async getRatings({ commit }, payload) {
    const response = await axios.get(
      process.env.VUE_APP_URL + '/sample-data/ratings.json'
    );
    const data = response.data;
    await commit('parseRatings', data);
  },
};
export const getters = {
  getProductRating: (state) => (id) => {
    return state.ratings.find((rating) => rating.productId === id);
  },
};
