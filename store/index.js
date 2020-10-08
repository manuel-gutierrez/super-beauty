export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      await dispatch('products/getProducts');
      await dispatch('ratings/getRatings');
    } catch (error) {
      throw new Error(error);
    }
  },
};
