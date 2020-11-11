export const state = () => ({
  data: {
    id: 'a527798b-d34e-45b0-a0ee-86316afd269a',
    slug: 'Maria_Beauty',
    name: 'María Alejandra Gonzales',
    phone: {
      code: '57',
      number: '310869963',
    },
    title: 'Maquilladora profesional',
    businessName: 'Super Beauty Negocios',
    profile:
      'El maquillaje, como cualquier otro tipo de arte, puede servir para expresar emociones en un lienzo, que en este caso es el rostro/cuerpo”. Así lo explica Eli, una joven maquilladora que trabaja a diario para conseguir convertirse en toda una profesional.  ',
  },
});
export const mutations = {
  // For future use.
};
export const actions = {
  // For future use.
};

export const getters = {
  getUserData: (state) => state.data,
};
