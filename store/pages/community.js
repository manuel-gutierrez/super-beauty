export const state = () => ({
  sections: {
    banner: {
      type: 'hero',
      data: {
        url: '#',
        image: {
          src: '/images/pages/community/banner.png',
          caption: 'Community banner image',
        },
      },
    },
    section_0: {
      title: 'Construyamos juntos algo hermoso',
      content:
        'Bienvenido a la comunidad Superbeauty Negocios. </br> Un lugar diseñado para crecer tu negocio de belleza de manera sostenible.',
    },
    section_1: {
      title: 'Contenido digital',
      content: 'Descarga contenido para la promoción de tus productos.',
      image: {
        src: '/images/pages/community/digital-content.png',
        caption: 'Digital Content download section image',
      },
      button: {
        label: 'Mostrar Más',
        url: '/contenido-digital',
      },
    },
    section_2: {
      title: 'Conversaciones',
      content:
        'Interactuara con gente como tu, emprendedora y apasionada por la belleza.',
      image: {
        src: '/images/pages/community/conversations.png',
        caption: 'Conversations section',
      },
      button: {
        label: 'Mostrar Más',
        url: '/conversaciones',
      },
    },
  },
});
export const getters = {
  getCommunityContent: (state) => (sectionName) => state.sections[sectionName],
};
