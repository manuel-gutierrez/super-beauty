<template>
  <div class="container">
    <div class="row">
      <div class="product-card col-4 col-md-2">
        <ProductCardHeader
          :label-type="product.label.type"
          :label-text="product.label.text"
        ></ProductCardHeader>
        <ProductCardImage
          :url="product.productImage"
          :tilte="product.productTitle"
        >
        </ProductCardImage>
        <ProductCardCaption
          :title="product.productTitle"
          :description="product.productDescription"
          type="info"
        >
        </ProductCardCaption>
        <ProductCardCaption
          :title="product.priceTitle"
          :price="product.price"
          type="price"
        >
        </ProductCardCaption>
        <ProductCardCaption
          :title="product.priceTitleSecondary"
          :price="product.priceSecondary"
          type="price-secondary"
        >
        </ProductCardCaption>
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
