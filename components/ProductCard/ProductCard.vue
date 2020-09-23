<template>
  <div class="product-card">
    <ProductCardHeader
      :label-type="product.label.type"
      :label-text="product.label.text"
      :in-wish-list="product.isInWishlist"
    ></ProductCardHeader>
    <nuxt-link :to="'product/' + product.id">
      <ProductCardImage
        :url="product.productImage"
        :tilte="product.productTitle"
      >
      </ProductCardImage>
      <ProductCardCaption
        :title="product.productTitle"
        :reference="product.productReference"
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
      <ProductRating
        class="product-rating--card"
        :rating="product.rating"
      ></ProductRating>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
