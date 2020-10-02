<template>
  <div class="row">
    <div class="col-2">
      <ProductCard
        v-for="productItem in products"
        :key="productItem.id"
        :product="productItem"
        class="px-3"
      />
    </div>
    <!-- <div class="col-8">
      <h2>{{ message }}</h2>
    </div> -->
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  async fetch({ $axios, store }) {
    try {
      const productFetch = await $axios.$get(
        process.env.VUE_APP_URL + '/sample-data/products.json'
      );
      store.commit('products/parseProducts', productFetch);
    } catch (error) {
      throw new Error(error);
    }
  },
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
    // ...mapGetters('pages/home', {
    //   banners: 'getBanners',
    //   headers: 'getHeaders',
    // }),
    ...mapGetters('products', {
      products: 'getProducts',
      productsInSale: 'getProductsInSale',
      recomendedProducts: 'getRecomendedProducts',
      topSaleProducts: 'getTopSaleProducts',
    }),
  },
  methods: {
    ...mapMutations('login', ['toggleLoginStatus']),

    logIn() {
      this.toggleLoginStatus();
    },
  },
};
</script>

<style></style>
