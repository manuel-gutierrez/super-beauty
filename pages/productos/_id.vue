<template>
  <div class="container product-detail-page">
    <div class="row">
      <div class="col-4 mr-auto"><</div>
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
    ...mapGetters('products', {
      getProduct: 'getProductById',
    }),
    product() {
      return this.getProduct(this.$route.params.id);
    },
  },
};
</script>

<style></style>
