export const state = () => ({
  sections: {
    banner: {
      type: 'hero',
      data: {
        image: {
          src: '/images/pages/community/banner.png',
          caption: 'Community banner image',
        },
      },
    },
    section_0: {
      title: 'Construyamos juntos algo hermoso',
      content:
        'Bienvenido a la comunidad Superbeauty Negocios. Un lugar diseñado para crecer tu negocio de belleza de manera sostenible.',
    },
    section_1: {
      title: 'Contenido digital',
      content: 'Descarga contenido para la promoción de tus productos.',
      image: {
        img: '/images/pages/community/digital-content.png',
        caption: 'Digital Content download section image',
      },
      button: 'Mostrar Más',
    },
    section_2: {
      title: 'Conversaciones',
      content:
        'Interactuara con gente como tu, emprendedora y apasionada por la belleza.',
      image: {
        img: '/images/pages/community/digital-content.png',
        caption: 'Conversations section',
      },
      button: 'Mostrar Más',
    },
  },
});
export const getters = {
  getComunityContent: (state) => (sectionName) => state.sections[sectionName],
};
