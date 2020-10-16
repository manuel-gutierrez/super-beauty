export const state = () => ({
  sections: {
    section_0: {
      bannerTitle:
        'Felicitaciones ¡Has calificado para obtener el envío gratis!',
      pageTitle: 'Datos de envío',
    },
    section_1: {
      title: '1. Dirección de Envío',
      shippingForm: {},
    },
    section_2: {
      subtotalLabel: 'Subtotal',
      discountLabel: 'Descuento',
      taxesLabel: 'IVA',
      shippingCostLabel: 'Costo de envío',
      freeShippingLabel: 'Gratis',
      totalLabel: 'Total',
      confirmOrderButtonLabel: 'confirmar orden',
      productsInCartLabel: 'PRODUCTOS EN EL CARRITO',
      backToCartButtonLabel: 'VOLVER AL CARRITO',
    },
    section_3: {
      title: 'Domicilios guardados',
      buttonLabel: 'Guardar y continuar',
    },
    section_4: {
      title: '2. Valor del envío.',
      subtitle: 'Verifica nuestra política de envíos aquí.',
      shippingPolicyUrl: 'https://google.com',
      shippingMethods: [
        {
          value: 30000,
          label_1: 'Envío expréss',
          label_2: 'recíbelo hoy - exclusivo Bogotá**',
        },
        {
          value: 20000,
          label_1: 'Envío estándar',
          label_2: 'recíbelo hoy - exclusivo Bogotá**',
        },
        {
          value: 0,
          label_1: 'Envío gratis',
        },
      ],
      ButtonLabel: 'Guardar y continuar',
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
