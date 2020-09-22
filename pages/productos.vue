<template>
  <div class="container">
    <div class="row-fluid">
      <div class="d-flex justify-content-around flex-wrap">
        <ProductCard
          v-for="productItem in products"
          :key="productItem"
          :product="productItem"
          class="mx-1 my-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
    ...mapGetters('products', ['getProducts']),
    products() {
      return this.getProducts;
    },
  },
  methods: {},
};
</script>

<style></style>
