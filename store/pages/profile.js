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
    section_2: {
      title: 'PERFIL',
      changeUser: 'cambia tu usuario',
      changePassword: 'cambia tu contraseña',
      editProfileLabel: 'editar perfil',
      profileTabsLabels: {
        firstTab: {
          title: '1. Información de contácto',
        },
        secondTab: {
          title: '2. Información sobre tu negocio.',
        },
        thirdTab: {
          title:
            '3. Mas información sobre tu negocio para mejorar la experiencia.',
          description:
            'Obtén un 10% de descuento en tu primera compra si completas estas datos. Recuerda que esto nos ayuda a prestarte una atención personalizada. No olvides completar todos los campos para asegurar el descuento!',
          stores: 'tiendas',
          employees: 'Empleados',
          followers: 'seguidores',
        },
      },
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
