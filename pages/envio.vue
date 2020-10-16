<template>
  <div class="shipping-page">
    <!-- Free Shipping Banner -->
    <!-- ::DESKTOP -->
    <div
      v-if="totals.total > freeShippingValue"
      class="d-none d-md-flex container-fluid free-shipping-banner"
    >
      <p>{{ header.bannerTitle }}</p>
    </div>
    <!-- ::MOBILE -->
    <div v-if="totals.total > freeShippingValue" class="d-md-none container">
      <div class="shipping-page__free-shipping">
        <p>{{ header.bannerTitle }}</p>
      </div>
    </div>
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
      <!-- FORM -->
      <div class="row section-header shipping-page__form__title">
        <p>{{ formSection.title }}</p>
      </div>

      <!-- //END FORM -->
      <!-- CART SUMMARY -->
      <!-- //END CART SUMMARY -->
      <!-- SAVED SHIPPING ADDRESS -->
      <!-- // SAVED SHIPPING ADDRESS -->
      <!-- SHIPPING METHODS -->
      <!-- // END SHIPPING METHODS -->
    </div>
    <div class="section-spacer"></div>
    <div class="d-md-none section-spacer mb-5"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters('pages/shippingPage', {
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
    header() {
      return this.getSection('section_0');
    },
    checkoutStep() {
      return this.nextStep();
    },
    formSection() {
      return this.getSection('section_1');
    },
    recommendedSection() {
      return this.getSection('section_2');
    },
    banner() {
      return this.getSection('section_3').banner;
    },
    additionalInfo() {
      return this.getSection('section_4');
    },
    productsInCart() {
      return this.getProducts(this.items);
    },
  },
  methods: {
    ...mapMutations('checkoutProgressBar', ['nextStep']),
  },
};
</script>

<style></style>
