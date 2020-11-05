export const state = () => ({
  userLabels: {
    name: 'Nombre*',
    lastName: 'Apellido*',
    phoneCode: '+57',
    phoneNumber: 'Teléfono de contacto (WhatsApp)*',
    email: 'Email*',
    title: 'Cargo*',
    businessName: 'Nombre comercial de tu negocio*',
  },
});
export const mutations = {
  // For future use.
};
export const actions = {
  // For future use.
};

export const getters = {
  getUserFormLabels: (state) => state.userLabels,
};
