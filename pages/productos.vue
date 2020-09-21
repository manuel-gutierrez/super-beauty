<template>
  <div class="container">
    <div class="row">
      <div class="col-4">This is a product data : {{ findProduct('2') }}</div>
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
    ...mapGetters('products', ['getProductById']),
  },
  methods: {
    findProduct(id) {
      return this.getProductById(id);
    },
  },
};
</script>

<style></style>
