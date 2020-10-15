export const state = () => ({
  labels: {
    step_0: 'MI CARRITO',
    step_1: 'DATOS DE ENVÍO',
    step_2: 'FINALIZAR PEDIDO',
  },
  activeStep: 0,
  numberOfSteps: 3,
});
export const mutations = {
  nextStep(state) {
    state.activeStep++;
  },
  previousStep(state) {
    state.activeStep--;
  },
  resetStep(state) {
    state.step = 0;
  },
};
export const actions = {
  // For future use.
};

export const getters = {
  getLabels: (state) => {
    return state.labels;
  },
  getNumberOfSteps: (state) => {
    return state.numberOfSteps;
  },
  getActiveStep: (state) => {
    return state.activeStep;
  },
};
