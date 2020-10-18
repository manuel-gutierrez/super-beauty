export const state = () => ({
  labels: {
    step_1: 'MI CARRITO',
    step_2: 'DATOS DE ENVÍO',
    step_3: 'FINALIZAR PEDIDO',
  },
  activeStep: 1,
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
  setActiveStep: (state) => (newStep) => {
    state.activeStep = newStep;
    return state.activeStep;
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
