const axios = require('axios');
export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const response = await axios.get(
        process.env.VUE_APP_URL + '/sample-data/products.json'
      );
      const data = response.data;
      await commit('products/parseProducts', data);
    } catch (error) {
      throw new Error(error);
    }
  },
};
