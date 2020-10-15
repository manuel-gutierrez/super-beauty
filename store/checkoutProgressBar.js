export const state = () => ({
  labels: {
    step_0: 'MI CARRITO',
    step_1: 'DATOS DE ENVÍO',
    step_2: 'FINALIZAR PEDIDO',
  },
});
export const mutations = {};
export const actions = {
  // For future use.
};

export const getters = {
  getLabels: (state) => {
    return state.labels;
  },
};
