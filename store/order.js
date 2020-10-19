export const state = () => ({
  order: {
    address: {
      id: '53f96189-6f21-4189-96ce-01f996a82b14',
      address: 'Carrera 50a #122-56, Apartamento 201, Suba',
      department: 'Bogota',
      city: 'Bogotá D.C.',
      country: 'CO',
      fullName: 'Andrea Avendano',
      name: 'Andrea',
      lastName: 'Avendano',
      phone: '3504754110 ',
      email: 'andrea@superbeauty.com',
      documentIdType: 'Cédula',
      documentId: '1032456231',
      postalCode: '1111121',
      default: true,
    },
    shippingMethod: {
      id: '8f079bbc-12bc-49da-aba1-5808a139b5243',
      value: {
        amount: 0,
        currency: 'COP',
      },
      label_1: 'Envío gratis',
    },
    cart: {
      products: [
        {
          id: '3aad1a64-2e96-40fe-9838-97af5cde903e',
          qty: 2,
          price: { amount: 60000, currency: 'COP' },
          total: 60000,
        },
        {
          id: '6eff8473-885a-44ae-85cd-3aa39060fed1',
          qty: 1,
          price: { amount: 60000, currency: 'COP' },
          total: 60000,
        },
        {
          id: '14e1ae62-9144-4493-b883-e892f5cd6c66',
          qty: 4,
          price: { amount: 60000, currency: 'COP' },
          total: 60000,
        },
      ],
      totals: {
        subtotal: 800000,
        discount: 150000,
        shipping: 0,
        taxes: 0,
        total: 650000,
        currency: 'COP',
      },
    },
  },
});
export const mutations = {};
export const actions = {};

export const getters = {
  getOrder: (state) => {
    return state.order;
  },
};
