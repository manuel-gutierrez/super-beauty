export const state = () => ({
  data: {
    id: '252a5f4f-5542-4085-bc23-19b888e058b0',
    name: 'Superbeauty Negocios',
    slug: 'Maria_makeupBeauty',
    type: 'Persona Natural',
    merchantId: '123445679-1',
    merchantIdType: 'NIT',
    city: 'Bogota DC',
    state: 'Cundinamarca',
    mail: 'contacto@superbeautynegocios.com.co',
    locations: [
      {
        type: 'physical',
        number: 2,
        employees: '1-3',
        phone: '',
      },
      {
        type: 'virtual',
        number: 1,
        employees: '',
        phone: {
          code: '57',
          number: '310869963',
        },
        meta: {
          followers: 5450,
          url: 'https://www.superbeautynegocios.com.co',
        },
      },
    ],
  },
});
export const mutations = {
  // For future use.
};
export const actions = {
  // For future use.
};

export const getters = {
  getMerchantData: (state) => state.data,
};
