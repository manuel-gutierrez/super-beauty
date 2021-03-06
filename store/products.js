const axios = require('axios');
export const state = () => ({
  products: [],
});
export const mutations = {
  parseProducts(state, payload) {
    state.products = payload;
  },
  setWishlistStatus(state, payload) {
    const productItem = state.products.find(
      (product) => product.id === payload.id
    );
    productItem.isInWishlist = payload.value;
  },
};
export const actions = {
  updateWishlist({ commit }, payload) {
    commit('setWishlistStatus', payload);
  },
  async getProducts({ commit }, payload) {
    const response = await axios.get(
      process.env.VUE_APP_URL + '/sample-data/products.json'
    );
    const data = response.data;
    await commit('parseProducts', data);
  },
};
export const getters = {
  getProducts(state) {
    return state.products;
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id);
  },
  getProductsById: (state) => (itemsArray) => {
    const productsInCart = [];
    itemsArray.forEach((item) => {
      productsInCart.push(
        state.products.find((product) => product.id === item.id)
      );
    });
    if (productsInCart.length > 0) {
      return productsInCart;
    } else {
      return [];
    }
  },
  getRecomendedProducts(state) {
    if (state.products) {
      return state.products.filter((product) => {
        return product.tags.includes('RECOMMENDED');
      });
    }
  },
  getProductsInSale(state) {
    if (state.products) {
      return state.products.filter((product) => {
        return product.sale.active === true;
      });
    }
  },
  getProductsInWishList(state) {
    if (state.products) {
      return state.products.filter((product) => {
        return product.isInWishlist === true;
      });
    }
  },
  getTopSaleProducts(state) {
    if (state.products) {
      return state.products.filter((product) => {
        return product.tags.includes('TOPSALE');
      });
    }
  },
  getProductsByRatingRange: (state) => (raitingCeil, raitingFloor) => {
    return state.products.filter(
      (product) =>
        product.rating <= raitingCeil && product.rating >= raitingFloor
    );
  },
  getProductsByCategory: (state) => (categoryId) => {
    return state.products.filter((product) => {
      return product.category.id === categoryId;
    });
  },
  getProductPreview: (state) => (id) => {
    const productItem = state.products.find((product) => product.id === id);
    if (productItem) {
      return {
        image: productItem.images[0],
        title: productItem.title,
        reference: productItem.reference,
        label: productItem.label,
      };
    } else {
      return false;
    }
  },
  filterProductsByVariant: (state) => (
    categoryId,
    subCategoryId,
    variationId,
    products = state.products
  ) => {
    return products.filter((product) => {
      return (
        product.category.id === categoryId &&
        product.category.subCategoryId === subCategoryId &&
        product.category.subCategoryVariationId === variationId
      );
    });
  },
  filterProductsByBrand: (state) => (
    categoryId,
    brandId,
    products = state.products
  ) => {
    return products.filter(
      (product) =>
        product.categoryId === categoryId && product.brandId === brandId
    );
  },
  findLowestAndHighestPrices: (state) => (products) => {
    const pricing = products.reduce((result, product) => {
      result.push(product.pricing[0].priceMoney.amount);
      return result;
    }, []);
    return {
      min: Math.min(...pricing),
      max: Math.max(...pricing),
    };
  },
};
