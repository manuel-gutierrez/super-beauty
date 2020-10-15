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
        <div class="cart-page__heading"></div>
        <!-- Cart Items -->
        <div class="cart-page__cart-items"></div>
        <!-- Totals Card -->
        <div class="cart-page__totals"></div>
        <!-- Recommended-->
        <div class="cart-page__recommended"></div>
        <!-- Banner-->
        <div class="cart-page__banner"></div>
        <!-- Help Box-->
        <div class="cart-page__help"></div>
      </div>
    </div>
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
  },
};
</script>

<style></style>
