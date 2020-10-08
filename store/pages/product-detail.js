export const state = () => ({
  sections: {
    modal: {
      title: '¡Haz agregado tu producto!',
      recommendedProductsTitle: 'Recomendados superbeauty',
      freeShippingTitle:
        'Felicitaciones ¡Has calificado para obtener el envío gratis!',
      totalLabel: 'Compra Total',
      totalLabelSuffix: 'items',
      checkoutButtonLabel: 'CHECK OUT',
      continueShoppingButton: 'SEGUIR COMPRANDO',
    },
    thirdSection: {
      title: 'Llevalo con',
    },
  },
});
export const mutations = {
  setSortingValue(state, payload) {
    state.sort.selected = payload;
  },
};
export const actions = {
  // For future use.
};

export const getters = {
  getSection: (state) => (sectionName) => {
    return state.sections[sectionName];
  },
};
