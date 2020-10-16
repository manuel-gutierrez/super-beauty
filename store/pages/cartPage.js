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
      couponButtonPlaceholder: 'Redimir',
      subtotalLabel: 'Subtotal',
      discountLabel: 'Descuento',
      taxesLabel: 'IVA',
      shippingCostLabel: 'Costo de envío',
      freeShippingLabel: 'Gratis',
      totalLabel: 'Total',
    },
    section_2: {
      title: 'Recomendados superbeauty',
    },
    section_3: {
      banner: {
        type: 'hero',
        data: {
          url: '/productos',
          image: {
            src: '/images/banner/banner_image_big@2x.png',
          },
        },
      },
    },
    section_4: {
      helpTitle: '¿Necesitas asistencia?',
      helpText:
        'Si necesitas ayuda por favor envíanos un correo a <b>hola@Superbeauty.com.co</b> y nos comunicaremos contigo.',
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
