export const state = () => ({
  products: [
    {
      id: '1',
      sale: true,
      saleText: 'oferta',
      new: true,
      newText: 'Nuevo',
      productImage: 'https://google.com',
      productTitle: 'NARS',
      productDescription: 'Orgasm Eyeshadow Palette',
      priceTitle: 'Precio al por mayor',
      Price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.5,
    },
    {
      id: '2',
      sale: true,
      saleText: 'oferta',
      new: true,
      newText: 'Nuevo',
      productImage: 'https://google.com',
      productTitle: 'NARS',
      productDescription: 'Orgasm Eyeshadow Palette',
      priceTitle: 'Precio al por mayor',
      Price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.5,
    },
    {
      id: '3',
      sale: true,
      saleText: 'oferta',
      new: true,
      newText: 'Nuevo',
      productImage: 'https://google.com',
      productTitle: 'NARS',
      productDescription: 'Orgasm Eyeshadow Palette',
      priceTitle: 'Precio al por mayor',
      Price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.5,
    },
    {
      id: '4',
      sale: true,
      saleText: 'oferta',
      new: true,
      newText: 'Nuevo',
      productImage: 'https://google.com',
      productTitle: 'NARS',
      productDescription: 'Orgasm Eyeshadow Palette',
      priceTitle: 'Precio al por mayor',
      Price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.5,
    },
  ],
});
export const mutations = {};
export const actions = {};

export const getters = {
  getProducts(state) {
    return state.products;
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id);
  },
};
