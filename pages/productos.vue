<template>
  <div class="container">
    <div class="row-fluid">
      <div class="">
        <ProductCardCarousel>
          <ProductCard
            v-for="productItem in products"
            :key="productItem.id"
            :product="productItem"
            class="px-3"
          />
        </ProductCardCarousel>
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
