export const state = () => ({
  sections: {
    banner: {
      type: 'hero',
      data: {
        url: '#',
        image: {
          src: '/images/pages/community/digital-content-banner@2x.png',
          caption: 'Community banner image',
        },
      },
    },
    section_0: {
      title: 'Contenido digital',
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
        imageCounterTitle: 'Galería',
        images: [
          {
            url: '/images/pages/community/content-download/content_1@2x.png',
            caption: 'promo-image-1',
          },
          {
            url: '/images/pages/community/content-download/content_2@2x.png',
            caption: 'promo-image-2',
          },
          {
            url: '/images/pages/community/content-download/content_3@2x.png',
            caption: 'promo-image-3',
          },
          {
            url: '/images/pages/community/content-download/content_4@2x.png',
            caption: 'promo-image-4',
          },
          {
            url: '/images/pages/community/content-download/content_5@2x.png',
            caption: 'promo-image-5',
          },
          {
            url: '/images/pages/community/content-download/content_6@2x.png',
            caption: 'promo-image-6',
          },
          {
            url: '/images/pages/community/content-download/content_7@2x.png',
            caption: 'promo-image-7',
          },
          {
            url: '/images/pages/community/content-download/content_8@2x.png',
            caption: 'promo-image-8',
          },
          {
            url: '/images/pages/community/content-download/content_9@2x.png',
            caption: 'promo-image-9',
          },
        ],
      },
    },
  },
});
export const getters = {
  getCommunityContentPage: (state) => (sectionName) =>
    state.sections[sectionName],
};
