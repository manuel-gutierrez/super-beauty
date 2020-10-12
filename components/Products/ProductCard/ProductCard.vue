<template>
  <!-- Large Prodduct Card Variation -->
  <div
    v-if="variation === 'large'"
    class="row justify-content-start product-card--large"
  >
    <ProductCardImage
      :url="product.images[0].url"
      :caption="product.caption"
      class="col-md-4"
    >
    </ProductCardImage>
    <div class="col-md-8">
      <!-- Description  -->
      <div class="row justify-content-start">
        <ProductCardCaption
          :title="product.title"
          :reference="product.reference"
          type="info"
          class="col-sm-12 product-card__info--large"
          :variation="variation"
        ></ProductCardCaption>
      </div>
      <!-- Price and Add to cart -->
      <div class="row justify-content-start align-items-end pr-4">
        <div class="col-sm product-card__add-to-cart--large">
          <ProductCardCaption
            v-if="productSinglePrice"
            :amount="productSinglePrice.amount"
            :currency="productSinglePrice.currency"
            type="price"
            :variation="variation"
          ></ProductCardCaption>
        </div>
        <div class="col-sm product-card__button">
          <button @click="$emit('add-to-cart', product.id)">Agregar</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Normal Product Card -->
  <div v-else class="product-card">
    <ProductCardHeader
      :label-type="product.label.type"
      :label-text="product.label.text"
      :in-wishlist="product.isInWishlist"
      @update-wishlist="toggleWishlistStatus"
    ></ProductCardHeader>
    <nuxt-link :to="'productos/' + product.id">
      <ProductCardImage :url="product.images[0].url" :caption="product.caption">
      </ProductCardImage>
      <!-- Description  -->
      <ProductCardCaption
        :title="product.title"
        :reference="product.reference"
        type="info"
      >
      </ProductCardCaption>

      <div v-for="price in product.pricing" :key="price.pricingType">
        <!-- Sale Price  -->
        <div v-if="product.sale.active">
          <ProductCardCaption
            v-if="price.pricingType === 'VOLUME_PRICING'"
            :title="price.pricingLabel"
            :amount="price.priceMoney.amount"
            :discounted-price="price.salePriceMoney.amount"
            :currency="price.salePriceMoney.currency"
            type="price"
          >
          </ProductCardCaption>
          <ProductCardCaption
            v-if="price.pricingType === 'FIXED_PRICING'"
            :title="price.pricingLabel"
            :amount="price.priceMoney.amount"
            :discounted-price="price.salePriceMoney.amount"
            :currency="price.salePriceMoney.currency"
            type="price-secondary"
          >
          </ProductCardCaption>
        </div>
        <div v-else>
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
      </div>
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
    variation: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    productSinglePrice() {
      return this.getPrice('VOLUME_PRICING');
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
    getPrice(type) {
      const pricingItem = this.product.pricing.find(
        (price) => price.pricingType === type
      );
      if (pricingItem) {
        return pricingItem.priceMoney;
      } else {
        return Error('Product do not have this price type: ' + type);
      }
    },
  },
};
</script>

<style></style>
