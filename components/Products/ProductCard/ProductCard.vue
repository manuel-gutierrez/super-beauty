<template>
  <div class="product-card">
    <ProductCardHeader
      :label-type="product.label.type"
      :label-text="product.label.text"
      :in-wishlist="product.isInWishlist"
      @update-wishlist="toggleWishlistStatus"
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
import { mapActions, mapMutations } from 'vuex';
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions('products', ['updateWishlist']),
    ...mapMutations('wishlist', {
      incrementWishlistCounter: 'incrementWishlistCounter',
      decrementWishlistCounter: 'decrementWishlistCounter',
    }),
    toggleWishlistStatus() {
      if (!this.product.isInWishlist) {
        this.incrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: true,
        });
      } else {
        this.decrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: false,
        });
      }
    },
  },
};
</script>

<style></style>
