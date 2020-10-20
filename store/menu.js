export const state = () => ({
  menu: [
    { text: 'Nuevo', url: '/nuevo', subMenu: false },
    {
      text: 'Maquillaje',
      url: '/productos/maquillaje',
      subMenu: true,
      show: false,
      category: 'makeup',
    },
    {
      text: 'Cuidado de la piel',
      url: '/productos/cuidado-de-la-piel',
      subMenu: true,
      show: false,
      category: 'skin',
    },
    {
      text: 'Fragancias',
      url: '/productos/fragancias',
      subMenu: true,
      show: false,
      category: 'fragrance',
    },
    {
      text: 'Herramientas',
      url: '/productos/herramientas',
      subMenu: true,
      show: false,
      category: 'fragrance',
    },
    { text: 'Comunidad', url: '/comunidad', subMenu: false },
    { text: 'Marcas', url: '/marcas', subMenu: false },
  ],
});

export const getters = {
  getMenu(state) {
    return state.menu;
  },
};
