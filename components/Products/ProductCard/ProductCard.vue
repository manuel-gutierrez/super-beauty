<template>
  <!-- Large Prodduct Card Variation -->
  <div v-if="variation === 'large'" class="product-card--large">
    <ProductCardImage
      :url="product.images[0].url"
      :caption="product.caption"
      class=""
    >
    </ProductCardImage>
    <div class="product-card__details--large">
      <!-- Description  -->
      <div class="">
        <ProductCardCaption
          :title="product.title"
          :reference="product.reference"
          type="info"
          class="product-card__info--large"
          :variation="variation"
        ></ProductCardCaption>
      </div>
      <!-- Price and Add to cart -->
      <div class="product-card__pricing--large">
        <div class="product-card__add-to-cart--large">
          <ProductCardCaption
            v-if="productSinglePrice"
            :amount="productSinglePrice.amount"
            :currency="productSinglePrice.currency"
            type="price"
            :variation="variation"
          ></ProductCardCaption>
        </div>
        <div class="product-card__add-to-cart__button--large">
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
    <nuxt-link :to="'/producto/' + product.id">
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
    ...mapMutations('wishlist', {
      incrementWishlistCounter: 'incrementWishlistCounter',
      decrementWishlistCounter: 'decrementWishlistCounter',
      addProductToWishlistCart: 'addProductToWishlistCart',
      removeProductFromWishListCart: 'removeProductFromWishListCart',
    }),
    ...mapActions('products', ['updateWishlist']),
    toggleWishlistStatus() {
      if (!this.product.isInWishlist) {
        this.incrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: true,
        });
        this.addProductToWishlistCart(this.product.id);
      } else {
        this.decrementWishlistCounter();
        this.updateWishlist({
          id: this.product.id,
          value: false,
        });
        this.removeProductFromWishListCart(this.product.id);
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
