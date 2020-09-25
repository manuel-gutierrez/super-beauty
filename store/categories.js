export const state = () => ({
  categories: [
    {
      id: 1,
      name: 'Maquillaje',
      SubCategories: [
        {
          id: 1,
          name: 'Face',
          subCategoriesVariation: [
            { id: 1, name: 'Foundation' },
            { id: 2, name: 'B B & CC Cream' },
            { id: 3, name: 'Tinted Moisturizer' },
            { id: 4, name: 'Skin' },
          ],
        },
        {
          id: 2,
          name: 'Eye',
          subCategoriesVariation: [
            { id: 1, name: 'Foundation' },
            { id: 2, name: 'B B & CC Cream' },
            { id: 3, name: 'Tinted Moisturizer' },
            { id: 4, name: 'Skin' },
          ],
        },
        {
          id: 3,
          name: 'Lips',
          subCategoriesVariation: [
            { id: 1, name: 'Foundation' },
            { id: 2, name: 'B B & CC Cream' },
            { id: 3, name: 'Tinted Moisturizer' },
            { id: 4, name: 'Skin' },
          ],
        },
        {
          id: 4,
          name: 'Skin',
          subCategoriesVariation: [
            { id: 1, name: 'Foundation' },
            { id: 2, name: 'B B & CC Cream' },
            { id: 3, name: 'Tinted Moisturizer' },
            { id: 4, name: 'Skin' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Cuidado de la Piel',
      SubCategories: [
        { id: 1, name: 'Face' },
        { id: 2, name: 'Eye' },
        { id: 3, name: 'Lips' },
        { id: 4, name: 'Skin' },
      ],
      subCategoriesVariation: [
        { id: 1, name: 'Foundation' },
        { id: 2, name: 'B B & CC Cream' },
        { id: 3, name: 'Tinted Moisturizer' },
        { id: 4, name: 'Skin' },
      ],
    },
    {
      id: 3,
      name: 'Capilar',
      SubCategories: [
        { id: 1, name: 'Face' },
        { id: 2, name: 'Eye' },
        { id: 3, name: 'Lips' },
        { id: 4, name: 'Skin' },
      ],
      subCategoriesVariation: [
        { id: 1, name: 'Foundation' },
        { id: 2, name: 'B B & CC Cream' },
        { id: 3, name: 'Tinted Moisturizer' },
        { id: 4, name: 'Skin' },
      ],
    },
    {
      id: 4,
      name: 'Fragancias',
      SubCategories: [
        { id: 1, name: 'Face' },
        { id: 2, name: 'Eye' },
        { id: 3, name: 'Lips' },
        { id: 4, name: 'Skin' },
      ],
      subCategoriesVariation: [
        { id: 1, name: 'Foundation' },
        { id: 2, name: 'B B & CC Cream' },
        { id: 3, name: 'Tinted Moisturizer' },
        { id: 4, name: 'Skin' },
      ],
    },
  ],
});
export const mutations = {};
export const actions = {};
export const getters = {
  // getSubCategories: (state) => (categoryId) => {
  //   return state.categories.find((category) => {
  //     const item = category.id === categoryId;
  //     return item.name;
  //   });
  // },
  getCategory: (state) => (categoryId) => {
    return state.categories.find((category) => category.id === categoryId);
  },
};
