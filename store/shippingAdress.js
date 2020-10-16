export const state = () => ({
  storedAddress: [
    {
      id: '53f96189-6f21-4189-96ce-01f996a82b14',
      address: 'Carrera 50a #122-56, Apartamento 201, Suba',
      city: 'Bogotá D.C.',
      country: 'CO',
      fullName: 'Andrea Avendano',
      name: 'Andrea',
      lastName: 'Avendano',
      phone: '3504754110 ',
      email: 'andrea@superbeauty.com',
      documentId: '1032456231',
      postalCode: '1111121',
      default: true,
    },
    {
      id: 'df0f91d3-a05f-47d6-994f-d190f2f6cf6c',
      address: 'Carrera 50b #111-56, Casa, Suba',
      city: 'Bogotá D.C.',
      country: 'CO',
      fullName: 'Andres Avendano',
      name: 'Andres',
      lastName: 'Avendano',
      phone: '3504754210 ',
      email: 'andrea@superbeauty.com',
      documentId: '1032416231',
      postalCode: '1111111',
      default: false,
    },
  ],
});
export const mutations = {};
export const actions = {
  // For future use.
};

export const getters = {
  getAddress: (state) => (sectionName) => {
    return state.sections[sectionName];
  },
};
