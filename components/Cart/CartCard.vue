<template>
  <div class="cart-card">
    <div class="col-4 col-md-3 cart-card__image">
      <ProductCardImage
        :url="product.images[0].url"
        :caption="product.images[0].caption"
      />
    </div>
    <div class="col-8 col-md-9 cart-card__content-wrapper">
      <div class="col-12 col-md-6 cart-card__caption">
        <div class="cart-card__caption__title">
          <h2>{{ product.title }}</h2>
        </div>
        <div class="cart-card__caption__reference">
          {{ product.reference }}
        </div>
        <div class="cart-card__caption__sku">sku: {{ product.sku }}</div>
        <div class="cart-card__caption__color">
          Color: {{ product.color.name }}
        </div>
      </div>
      <!-- PRICE :: MOBILE -->
      <div class="col-12 d-md-none cart-card__price">
        <div v-if="product.sale.active">
          <ProductCardCaption
            :amount="fullPrice.amount"
            :discounted-price="salePrice.amount"
            :currency="fullPrice.currency"
            type="price"
          >
          </ProductCardCaption>
        </div>
        <div v-else>
          <ProductCardCaption
            :amount="fullPrice.amount"
            :currency="fullPrice.currency"
            type="price"
          >
          </ProductCardCaption>
        </div>
      </div>
      <!--// END  -->
      <div class="col-12 col-md-2 cart-card__counter">
        <ProductAddToCart :product="product" :modal="false" :button="false">
        </ProductAddToCart>
      </div>
      <div class="col-12 col-md-4 cart-card__price-actions">
        <div class="col-12 d-none d-md-flex cart-card__price">
          <div v-if="product.sale.active">
            <ProductCardCaption
              :amount="fullPrice.amount"
              :discounted-price="salePrice.amount"
              :currency="fullPrice.currency"
              type="price"
            >
            </ProductCardCaption>
          </div>
          <div v-else>
            <ProductCardCaption
              :amount="fullPrice.amount"
              :currency="fullPrice.currency"
              type="price"
            >
            </ProductCardCaption>
          </div>
        </div>
        <div class="col-12 cart-card__actions">
          <p
            class="cart-card__actions__remove"
            @click="removeProductFromCart(product.id)"
          >
            remover
          </p>
          <span>|</span>
          <span>
            {{ product.inWishlist }}
            <ProductWishlistIcon
              :in-wishlist="product.isInWishlist"
              @update-wishlist="toggleWishlistStatus()"
            ></ProductWishlistIcon
          ></span>
          <p class="cart-card__actions__wishlist">favoritos</p>
        </div>
      </div>
    </div>
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
  computed: {
    fullPrice() {
      return this.getPrice('FIXED_PRICING', 'normal');
    },
    salePrice() {
      return this.getPrice('FIXED_PRICING', 'sale');
    },
  },
  methods: {
    ...mapActions('products', ['updateWishlist']),
    ...mapActions('cart', ['removeFromCart']),
    ...mapMutations('wishlist', {
      incrementWishlistCounter: 'incrementWishlistCounter',
      decrementWishlistCounter: 'decrementWishlistCounter',
      addProductToWishlistCart: 'addProductToWishlistCart',
      removeProductFromWishListCart: 'removeProductFromWishListCart',
    }),
    getPrice(name, type) {
      const pricingItem = this.product.pricing.find(
        (price) => price.pricingType === name
      );
      if (pricingItem && type === 'sale' && pricingItem.salePriceMoney) {
        return pricingItem.salePriceMoney;
      }
      if (pricingItem && type === 'normal' && pricingItem.salePriceMoney) {
        return pricingItem.priceMoney;
      } else {
        return Error(
          'Product do not have this price type or name: ' + type + name
        );
      }
    },

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
    removeProductFromCart(productId) {
      this.removeFromCart({ id: productId });
    },
  },
};
</script>

<style></style>
