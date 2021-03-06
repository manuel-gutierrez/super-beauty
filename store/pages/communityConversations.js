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
        filterTitle: 'Conversaciones',
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
        startConversationTitle: '[+] INICIA UNA CONVERSACIÓN',
        showMoreButton: 'Mostrar Más',
        conversationFormPlaceholders: {
          title: 'Agregar título de conversación...',
          comment: 'Iniciar conversación...',
          tags: 'Agregar tags',
          button: 'Enviar',
        },
      },
    },
    section_1: {
      tagsTitle: 'Trending Tags',
      infoTitle: 'Estatus de la conversación',
      infoLabels: {
        shared: 'veces compartido',
        views: 'Vistas',
        likes: 'Me gusta',
        images: 'Fotos',
      },
      relatedConversationsTitle: 'Conversaciones relacionados',
    },
  },
});
export const getters = {
  getCommunityConversationsPage: (state) => (sectionName) =>
    state.sections[sectionName],
};
