export const state = () => ({
  sections: {
    section_0: {
      bannerTitle:
        'Felicitaciones ¡Has calificado para obtener el envío gratis!',
      pageTitle: 'FINALIZAR PEDIDO',
      editLabel: 'Editar',
    },
    section_1: {
      title: '1. Dirección de Envío',
    },
    section_2: {
      title: '2. Valor del envío.',
      subtitle: 'Verifica nuestra política de envíos',
      policyLabel: 'aquí',
      shippingPolicyUrl: 'https://google.com',
    },
    section_3: {
      title: '3. Métodos de pago.',
    },
    section_4: {
      title: '4. Revisa tu pedido y confirma tu orden.',
      content: 'Revisa por favor tu orden antes de confirmarla',
    },
  },
});
export const mutations = {};
export const actions = {
  // For future use.
};

export const getters = {
  getPaymentContent: (state) => (sectionName) => {
    return state.sections[sectionName];
  },
};
