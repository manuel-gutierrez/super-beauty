export const state = () => ({
  sections: {
    section_0: {
      bannerTitle:
        'Felicitaciones ¡Has calificado para obtener el envío gratis!',
      pageTitle: 'Datos de envío',
    },
    section_1: {
      title: '1. Dirección de Envío',
      shippingFormPlaceholders: {
        name: 'Nombres*',
        lastName: 'Apellidos*',
        phone: 'Celular*',
        email: 'Email*',
        documentIdTypes: [
          { text: 'Tipo de Documento', value: null },
          'Cédula de Ciudadanía',
          'Pasaporte',
          'Cédula de Extranjería',
        ],
        documentId: 'Número',
        department: 'Departamento',
        address: 'Dirección*',
        city: 'Ciudad',
        country: 'País',
        postalCode: 'Código Postal*',
      },
      title_2: 'Domicilios Guardados',
      buttonLabel: 'Guardar y continuar',

      title_3: '2. Valor del envío.',
      subtitle: 'Verifica nuestra política de envíos aquí.',
      shippingPolicyUrl: 'https://google.com',
      shippingMethods: [
        {
          value: {
            amount: 30000,
            currency: 'COP',
          },
          label_1: 'Envío expréss',
          label_2: 'recíbelo hoy - exclusivo Bogotá**',
        },
        {
          value: {
            amount: 20000,
            currency: 'COP',
          },
          label_1: 'Envío estándar',
          label_2: 'recíbelo hoy - exclusivo Bogotá**',
        },
        {
          value: {
            amount: 0,
            currency: 'COP',
          },
          label_1: 'Envío gratis',
        },
      ],
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
