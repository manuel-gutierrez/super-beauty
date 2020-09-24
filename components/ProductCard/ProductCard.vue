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
      <!-- Description  -->
      <ProductCardCaption
        :title="product.productTitle"
        :reference="product.productReference"
        type="info"
      >
      </ProductCardCaption>
      <!-- Main Price  -->
      <ProductCardCaption
        v-if="product.sale"
        :title="product.priceTitle"
        :price="product.price"
        :discounted-price="product.discountedPrice"
        type="price"
      >
      </ProductCardCaption>
      <ProductCardCaption
        v-else
        :title="product.priceTitle"
        :price="product.price"
        type="price"
      >
      </ProductCardCaption>
      <!-- Secondary Price  -->
      <ProductCardCaption
        v-if="product.sale"
        :title="product.priceTitleSecondary"
        :price="product.priceSecondary"
        :discounted-price="product.discountedPriceSecondary"
        type="price-secondary"
      >
      </ProductCardCaption>
      <ProductCardCaption
        v-else
        :title="product.priceTitleSecondary"
        :price="product.priceSecondary"
        type="price-secondary"
      >
      </ProductCardCaption>
      <!-- Product Rating -->
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
