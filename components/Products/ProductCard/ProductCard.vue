<template>
  <div class="product-card">
    <ProductCardHeader
      :label-type="product.label.type"
      :label-text="product.label.text"
      :in-wishlist="product.isInWishlist"
      @update-wishlist="toggleWishlistStatus"
    ></ProductCardHeader>
    <nuxt-link :to="'product/' + product.id">
      <ProductCardImage :url="product.images[0].url" :caption="product.caption">
      </ProductCardImage>
      <!-- Description  -->
      <ProductCardCaption
        :title="product.title"
        :reference="product.reference"
        type="info"
      >
      </ProductCardCaption>
      <!-- Main Price  -->
      <div v-for="price in product.pricing" :key="price.pricingType">
        <ProductCardCaption
          v-if="price.pricingType === 'VOLUME_PRICING'"
          :title="price.pricingLabel"
          :amount="price.priceMoney.amount"
          :currency="price.priceMoney.currency"
          type="price"
        >
        </ProductCardCaption>
        <ProductCardCaption
          v-if="price.pricingType === 'FIXED_PRICING'"
          :title="price.pricingLabel"
          :amount="price.priceMoney.amount"
          :currency="price.priceMoney.currency"
          type="price-secondary"
        >
        </ProductCardCaption>
      </div>
      <!-- <ProductCardCaption
          :title="product.pricing"
          :price="product.price"
          :discounted-price="product.discountedPrice"
          type="price"
        >
        </ProductCardCaption> -->
      <!-- Secondary Price  -->
      <!-- <ProductCardCaption
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
      </ProductCardCaption> -->
      <!-- Product Rating -->
      <ProductRating
        class="product-rating--card"
        :rating="product.rating.score"
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
