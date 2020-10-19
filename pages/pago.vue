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
      <div class="payment-page__content">
        <div class="col-md-6 col-sm-12">
          <section class="payment-page__shipping">
            <div class="payment-page__shipping__title">
              <p>
                {{ shippingAddress.title }}
              </p>
            </div>
            <div class="payment-page__shipping__address">
              <div class="shipping__address__name">
                {{ order.address.name }} {{ order.address.lastName }}
              </div>
              <div class="shipping__address__address">
                {{ order.address.address }}
              </div>
              <div class="shipping__address__phone">
                {{ order.address.phone }}
              </div>
              <div class="shipping__address__document-id">
                {{ order.address.documentId }}
              </div>
              <div class="shipping__address__city">
                {{ order.address.city }}
              </div>
              <div class="shipping__address__post-code">
                {{ order.address.postalCode }}
              </div>
            </div>
            <div class="payment-page__shipping__method">
              <div class="payment-page__shipping__title">
                <p>
                  {{ shippingCost.title }}
                </p>
              </div>
              <p class="payment-page__shipping__method__content">
                {{ shippingCost.subtitle }}
                <a :href="shippingCost.shippingPolicyUrl">{{
                  shippingCost.policyLabel
                }}</a>
              </p>
              <p
                class="payment-page__shipping__method__content__shipping-label"
              >
                {{ order.shippingMethod.label_1 }}
              </p>
            </div>
          </section>
          <section class="payment-page__form">
            <div class="payment-page__form__title">
              <p>
                {{ formSectionTitle }}
              </p>
            </div>
            <div class="payment-page__form__brands">
              <BrandsImageList />
            </div>
            <div class="payment-page__form__inputs">
              <PaymentForm />
            </div>
          </section>
        </div>
        <div class="col-md-6 col-sm-12">Cart...</div>
      </div>
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
    ...mapGetters('order', {
      order: 'getOrder',
    }),
    // Content
    header() {
      return this.content('section_0');
    },
    checkoutStep() {
      return this.setActiveStep(3);
    },
    shippingAddress() {
      return this.content('section_1');
    },
    shippingCost() {
      return this.content('section_2');
    },
    formSectionTitle() {
      return this.content('section_3').title;
    },
    productsInCart() {
      return this.getProducts(this.items);
    },
    cartTextContent() {
      return this.getCartSection('section_1');
    },
  },
  methods: {
    ...mapMutations('checkoutProgressBar', ['setActiveStep']),
  },
};
</script>

<style></style>
