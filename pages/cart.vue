<template>
  <div class="cart-page">
    <!-- Free Shipping Banner -->
    <!-- ::DESKTOP -->
    <div
      v-if="totals.total > freeShippingValue"
      class="d-none d-md-flex container-fluid cart-page__free-shipping"
    >
      <p>{{ freeShipping.bannerTitle }}</p>
    </div>
    <!-- ::MOBILE -->
    <div v-if="totals.total > freeShippingValue" class="d-md-none container">
      <div class="cart-page__free-shipping">
        <p>{{ freeShipping.bannerTitle }}</p>
      </div>
    </div>
    <div class="container">
      <!-- Progress Bar -->
      <div class="row cart-page__progress-bar">
        <ProgressBarCheckout class="col-md-12"></ProgressBarCheckout>
      </div>
      <!-- Cart  -->
      <div class="row cart-page__cart-section">
        <!-- Heading -->
        <div class="col-md-12 section-header cart-page__heading">
          <h2>{{ cartTextContent.heading }}</h2>
        </div>
        <div class="col-md-12 cart-page__counter">
          <p>{{ cartTextContent.cartCounter }} ({{ items.length }})</p>
        </div>
        <!-- Cart Items -->
        <div class="cart-page__cart-items col-12 col-md-8">
          <CartCard
            v-for="product in productsInCart"
            :key="product.id"
            :product="product"
          ></CartCard>
        </div>
        <!-- Totals Card -->
        <div class="cart-page__totals col-12 col-md-4">
          <div class="cart-page__totals__coupon">input...</div>
          <div class="cart-page__totals__values">discount subtotal TOTAL</div>
          <div class="cart-page__totals__buttons">
            <button>checkout</button>
            <button>continuar comprando</button>
          </div>
        </div>
        <!-- Recommended-->
        <div class="col-md-8 cart-page__recommended">
          <div class="">
            <h2>{{ recommendedSection.title }}</h2>
          </div>
          <div class="">
            <ProductCardCarousel :items-to-display="4" :bullets="true">
              <ProductCard
                v-for="relatedProduct in recommendedProducts"
                :key="relatedProduct.ordinal"
                :product="relatedProduct"
              />
            </ProductCardCarousel>
          </div>
        </div>
        <div class="col-md-4 cart-page__info">
          <!-- Banner-->
          <div class="col-md-12 cart-page__info__banner">BANNER</div>
          <!-- Help Box-->
          <div class="col-md-12 cart-page__info__help">
            <h3>{{ additionalInfo.helpTitle }}</h3>
            <p>{{ additionalInfo.helpText }}</p>
            <h3>{{ additionalInfo.cardAcceptanceTitle }}</h3>
            <MainFooterBrands />
          </div>
        </div>
      </div>
    </div>
    <div class="section-spacer"></div>
    <div class="d-md-none section-spacer mb-5"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('pages/cartPage', {
      getSection: 'getSection',
    }),
    ...mapGetters('cart', {
      freeShippingValue: 'getFreeShippingValue',
      items: 'getCartItems',
      totals: 'getTotals',
    }),
    ...mapGetters('products', {
      getProducts: 'getProductsById',
      recommendedProducts: 'getRecomendedProducts',
    }),
    // Content
    freeShipping() {
      return this.getSection('section_0');
    },
    cartTextContent() {
      return this.getSection('section_1');
    },
    recommendedSection() {
      return this.getSection('section_2');
    },
    banner() {
      return this.getSection('section_3');
    },
    additionalInfo() {
      return this.getSection('section_4');
    },
    productsInCart() {
      return this.getProducts(this.items);
    },
  },
};
</script>

<style></style>
