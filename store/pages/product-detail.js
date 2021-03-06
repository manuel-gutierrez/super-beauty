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
    section_1: {},
    section_2: {},
    section_3: {
      title: 'LLÉVALO CON',
    },
    section_4: {
      title: 'Calificaciones y comentarios',
      RatingLabelSingular: 'Estrella',
      RatingLabelPlural: 'Estrellas',
      RatingCounterLabel: 'Calificaciones',
      PercentageLabel: 'Recomendado',
    },
    section_5: {
      title: 'fotos del producto',
      buttonTitle: 'DESCARGAR TODOS',
    },
    section_6: {
      title: 'Productos Similares',
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
