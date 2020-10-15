export const state = () => ({
  sections: {
    section_0: {
      bannerTitle:
        'Felicitaciones ¡Has calificado para obtener el envío gratis!',
    },
    section_1: {
      heading: 'Mi Carrito',
      cartCounter: 'ITEMS EN EL CARRITO',
      couponPlaceholder: 'Ingresa el código de tu cupón.',
      subtotalLabel: 'Subtotal',
      discountLabel: 'Descuento',
      shippingCostLabel: 'Costo de envío',
      totalLabel: 'Total',
    },
    section_2: {
      title: 'Recomendados superbeauty',
    },
    section_3: {
      banner: {
        type: 'color',
        data: {
          url: '#',
          caption: {
            title: 'BANNER',
          },
          color: '#DBDBDB',
        },
      },
    },
    section_4: {
      helpTitle: '¿Necesitas asistencia?',
      helpText:
        'Si necesitas ayuda por favor envíanos un correo a hola@Superbeauty.com.co y nos comunicaremos contigo.',
      cardAcceptanceTitle: 'aceptamos',
    },
  },
});
export const mutations = {};
export const actions = {
  // For future use.
};

export const getters = {
  getSection: (state) => (sectionName) => {
    return state.sections[sectionName];
  },
};
