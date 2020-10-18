<template>
  <div class="payment-page">
    <!-- Free Shipping Banner -->
    <!-- ::DESKTOP -->
    <div
      v-if="totals.total > freeShippingValue"
      class="d-none d-md-flex container-fluid payment-page__free-shipping free-shipping-banner"
    >
      <p>{{ header.bannerTitle }}</p>
    </div>
    <!-- ::MOBILE -->
    <div v-if="totals.total > freeShippingValue" class="d-md-none container">
      <div class="payment-page__free-shipping free-shipping-banner">
        <p>{{ header.bannerTitle }}</p>
      </div>
    </div>
    <!-- // END MOBILE -->
    <div class="container">
      <!-- Progress Bar -->
      <div class="row shipping-page__progress-bar">
        <ProgressBarCheckout class="col-md-12"></ProgressBarCheckout>
      </div>
      <!-- PAGE TITLE -->
      <div class="row section-header shipping-page__heading">
        <h2 class="col-md-12">{{ header.pageTitle }}</h2>
      </div>
      <!--// PAGE TITLE -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters('pages/paymentPage', {
      content: 'getPaymentContent',
    }),
    ...mapGetters('pages/cartPage', {
      getCartSection: 'getSection',
    }),
    ...mapGetters('cart', {
      freeShippingValue: 'getFreeShippingValue',
      items: 'getCartItems',
      totals: 'getTotals',
    }),
    ...mapGetters('products', {
      getProducts: 'getProductsById',
    }),
    // Content
    header() {
      return this.content('section_0');
    },
    checkoutStep() {
      return this.nextStep();
    },
    shippingAddress() {
      return this.content('section_1');
    },
    shippingCost() {
      return this.content('section_2');
    },
    productsInCart() {
      return this.getProducts(this.items);
    },
    cartTextContent() {
      return this.getCartSection('section_1');
    },
  },
  methods: {
    ...mapMutations('checkoutProgressBar', ['nextStep']),
  },
};
</script>

<style></style>
