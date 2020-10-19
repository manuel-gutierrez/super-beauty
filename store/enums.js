export const state = () => ({
  filterNames: {
    PRICE: 'price',
    RATING: 'rating',
    BRAND: 'brand',
    VARIANT: 'variant',
    OTHER: 'other',
    SUSTAINABLE: 'sustainable',
    NEW: 'new',
  },
  paymentMethods: {
    CREDIT_CARD: 'credit_card',
    DEBIT_CARD: 'debit_card',
    EFECTY: 'efecty',
    BALOTO: 'baloto',
  },
});
export const mutations = {};

export const getters = {
  getEnum: (state) => (enumName) => {
    return state[enumName];
  },
};
