export const state = () => ({
  sections: {
    banner: {
      type: 'hero',
      data: {
        url: '#',
        image: {
          src: '/images/pages/community/conversations-page-banner@2x.png',
          caption: 'Conversations banner image',
        },
      },
    },
    section_0: {
      title: 'Conversaciones',
      content: {
        filterLabel_1: 'Filtros',
        filterOptions_1: [
          { value: null, text: 'Selecciona' },
          { text: 'Antiguos', value: 'sort-id-1', disabled: false },
          { text: 'Calificación', value: 'sort-id-2', disabled: false },
        ],
        filterLabel_2: 'Ordenar por',
        filterOptions_2: [
          { value: null, text: 'Selecciona' },
          { text: 'Antiguos', value: 'sort-id-1', disabled: false },
          { text: 'Calificación', value: 'sort-id-2', disabled: false },
        ],
        startConversationTitle: 'INICIA UNA CONVERSACIÓN',
        showMoreButton: 'Mostrar Más',
      },
    },
  },
});
export const getters = {
  getCommunityConversationsPage: (state) => (sectionName) =>
    state.sections[sectionName],
};
