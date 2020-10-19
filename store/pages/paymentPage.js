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
      form: {
        creditCard: {
          title: 'PAGAR CON TARJETA DE CRÉDITO',
          placeholders: {
            pan: 'Numero de tarjeta*',
            name: 'Nombre del titular*',
            expDateTitle: 'Fecha de vencimiento',
            expDateMonth: 'Mes',
            expDateYear: 'Año',
            cvv: 'CVV',
            saveCard: 'Guardar la información de esta tarjeta',
          },
        },
        address: {
          title: 'Dirección de facturación',
          placeholders: {
            option_1: 'Usar mi dirección de entrega',
            option_2: 'Usar una dirección diferente',
          },
        },
        debitCard: {
          title: 'PAGAR CON TARJETA DÉBITO',
        },
        efecty: {
          title: 'PAGAR CON EFECTY',
        },
        baloto: {
          title: 'PAGAR VÍA BALOTO',
        },
        buttonLabel: 'Guardar y continuar',
      },
    },
    section_4: {
      title: '4. Revisa tu pedido y confirma tu orden.',
      content: 'Revisa por favor tu orden antes de confirmarla',
      backToCartButtonLabel: 'Volver al carrito',
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
