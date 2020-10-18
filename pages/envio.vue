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
      <div class="shipping-page__free-shipping free-shipping-banner">
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

      <div class="shipping-page__content">
        <!-- FORM SECTION -->
        <div class="col-md-6 col-12 shipping-page__form">
          <!-- FORM -->
          <ShippingForm></ShippingForm>
          <!-- // END FORM -->
        </div>
        <!-- //END FORM  SECTION -->

        <!-- CART SUMMARY -->
        <div class="col-md-6 col-sm-12 shipping-page__cart">
          <div class="shipping-page__totals">
            <div class="shipping-page__totals__values">
              <div class="shipping-page__totals__values__summary">
                <div class="col-md-12 shipping-page__totals__values__subtotal">
                  <p>{{ cartTextContent.subtotalLabel }}</p>
                  <money-format
                    :value="totals.subtotal"
                    :locale="'es-co'"
                    :currency-code="totals.currency"
                    :subunits-value="false"
                    :hide-subunits="true"
                    class=""
                  ></money-format>
                </div>
                <div
                  v-if="totals.discount > 0"
                  class="col-md-12 shipping-page__totals__values__discount"
                >
                  <p>{{ cartTextContent.discountLabel }}</p>
                  <money-format
                    :value="totals.discount"
                    :locale="'es-co'"
                    :currency-code="totals.currency"
                    :subunits-value="false"
                    :hide-subunits="true"
                    class=""
                  ></money-format>
                </div>
                <div
                  v-if="totals.taxes > 0"
                  class="col-md-12 shipping-page__totals__values__taxes"
                >
                  <p>{{ cartTextContent.taxesLabel }}</p>
                  <money-format
                    :value="totals.taxes"
                    :locale="'es-co'"
                    :currency-code="totals.currency"
                    :subunits-value="false"
                    :hide-subunits="true"
                    class=""
                  ></money-format>
                </div>
                <div
                  v-if="totals.total < freeShippingValue && totals.total > 0"
                  class="col-md-12 shipping-page__totals__values__shipping"
                >
                  <p>{{ cartTextContent.shippingCostLabel }}</p>
                  <money-format
                    :value="totals.shipping"
                    :locale="'es-co'"
                    :currency-code="totals.currency"
                    :subunits-value="false"
                    :hide-subunits="true"
                    class=""
                  ></money-format>
                </div>
                <div
                  v-else
                  class="col-md-12 shipping-page__totals__values__shipping"
                >
                  <p>{{ cartTextContent.shippingCostLabel }}</p>
                  <p>{{ cartTextContent.freeShippingLabel }}</p>
                </div>
              </div>
              <div>
                <div class="col-md-12 shipping-page__totals__values__total">
                  <p>{{ cartTextContent.totalLabel }}</p>
                  <money-format
                    :value="totals.total"
                    :locale="'es-co'"
                    :currency-code="totals.currency"
                    :subunits-value="false"
                    :hide-subunits="true"
                    class=""
                  ></money-format>
                </div>
              </div>
            </div>
          </div>
          <div class="shipping-page__items-counter">
            <p>{{ cartTextContent.cartCounter }} ({{ items.length }})</p>
          </div>
          <div class="shipping-page__cart-items">
            <CartCard
              v-for="product in productsInCart"
              :key="product.id"
              :product="product"
            ></CartCard>
          </div>
          <div class="shipping-page__back-to-cart">
            <button>
              {{ cartItems.backToCartButtonLabel }}
            </button>
          </div>
        </div>
        <!-- //END CART SUMMARY -->

        <!-- SHIPPING METHODS -->
        <div class="col-md-6 col-12 shipping-page__shipping-methods"></div>
        <!-- // END SHIPPING METHODS -->
      </div>
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
      content: 'getShippingContent',
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
      recommendedProducts: 'getRecomendedProducts',
    }),
    ...mapGetters('pages/cartPage', {
      getSection: 'getSection',
    }),
    // Content
    header() {
      return this.content('section_0');
    },
    checkoutStep() {
      return this.nextStep();
    },
    formSection() {
      return this.content('section_1');
    },
    cartItems() {
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
