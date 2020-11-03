export const state = () => ({
  sections: {
    banner: {
      type: 'hero',
      data: {
        url: '#',
        image: {
          src: '/images/pages/profile/banner@2x.png',
          caption: 'Profile Banner image',
        },
      },
    },
    section_0: {
      title: '',
      content:
        'El maquillaje, como cualquier otro tipo de arte, puede servir para expresar emociones en un lienzo, que en este caso es el rostro/cuerpo”. Así lo explica Eli, una joven maquilladora que trabaja a diario para conseguir convertirse en toda una profesional.',
    },
    section_1: {
      title: 'CONVERSACIONES',
      button: {
        label: 'Ver Más',
        url: '',
      },
    },
  },
});
export const getters = {
  getProfilePageContent: (state) => (sectionName) =>
    state.sections[sectionName],
};
