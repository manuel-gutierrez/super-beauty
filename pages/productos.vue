<template>
  <div class="container">
    <div class="row">
      <div class="product-card col-4 col-md-2">
        <ProductCardHeader
          :label-type="product.label.type"
          :label-text="product.label.text"
        ></ProductCardHeader>
        <ProductCardImage :url="product.productImage"> </ProductCardImage>
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
      return this.getProductById('1');
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
