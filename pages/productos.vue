<template>
  <div class="container">
    <div class="row">
      <div class="product-card col-4">
        <ProductCardHeader
          :label-type="product.label.type"
          :label-text="product.label.text"
        ></ProductCardHeader>
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
    ...mapGetters('products', ['getProductById']),
    product() {
      return this.getProductById('2');
    },
  },
  methods: {
    findProduct(id) {
      return this.getProductById(id);
    },
  },
};
</script>

<style></style>
