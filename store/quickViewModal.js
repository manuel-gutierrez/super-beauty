export const state = () => ({
  sections: {
    section_0: {
      title: 'Vista Rápida',
    },
  },
});

export const getters = {
  getModalContent: (state) => (sectionName) => {
    return state.sections[sectionName];
  },
};
