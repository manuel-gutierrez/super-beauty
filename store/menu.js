export const state = () => ({
  menu: [
    { text: 'Nuevo', url: '/nuevo', subMenu: false },
    {
      text: 'Maquillaje',
      categoryId: 1,
      url: '/productos/maquillaje',
      subMenu: true,
      show: false,
      category: 'makeup',
    },
    {
      text: 'Cuidado de la piel',
      url: '/productos/cuidado-de-la-piel',
      categoryId: 2,
      subMenu: true,
      show: false,
      category: 'skin',
    },
    {
      text: 'Fragancias',
      url: '/productos/fragancias',
      categoryId: 3,
      subMenu: true,
      show: false,
      category: 'fragrance',
    },
    {
      text: 'Herramientas',
      url: '/productos/herramientas',
      categoryId: 5,
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
