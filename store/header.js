export const state = () => ({
  data: {
    banner: {
      section_1: {
        text: 'Envios gratis por compras superiores a $600.000',
      },
      section_2: {
        title: '',
        items: [
          { text: 'Rastrea tu envio', url: 'rastrea-tu-envio' },
          { text: 'Pedir de nuevo', url: 'pedir-de-nuevo' },
          { text: 'Soporte', url: 'soporte' },
        ],
        type: 'links',
      },
    },
    actions: {
      logo: {
        path: {
          normal: '/logo/logo_super_beauty.png',
          '2x': '/logo/logo_super_beauty@2x.png',
        },
        width: 176,
        height: 58,
      },
    },
    profile: {
      user: {
        name: 'Andrea',
      },
    },
  },
});
export const mutations = {};

export const getters = {
  getActionsData(state) {
    return state.data.actions;
  },
  getBannerData(state) {
    return state.data.banner;
  },
  getProfileData(state) {
    return state.data.profile;
  },
};
