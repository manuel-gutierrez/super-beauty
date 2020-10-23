export const state = () => ({
  sections: {
    section_0: {
      title: 'Vista Rápida',
    },
    section_1: {
      ratingLabel: '5/ Estrellas',
      likes: '2.7K likes',
      size: 'Tamaño',
    },
  },
});

export const getters = {
  getModalContent: (state) => (sectionName) => {
    return state.sections[sectionName];
  },
};
