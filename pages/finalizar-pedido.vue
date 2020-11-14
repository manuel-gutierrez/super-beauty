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
      <div class="row payment-page__progress-bar">
        <ProgressBarCheckout class="col-md-12"></ProgressBarCheckout>
      </div>
      <!-- PAGE TITLE -->
      <div class="row section-header payment-page__heading">
        <h2 class="col-md-12">{{ header.pageTitle }}</h2>
      </div>
      <!--// PAGE TITLE -->
      <div class="payment-page__content">
        <div class="col-md-6 col-sm-12">
          <section class="payment-page__shipping">
            <div class="payment-page__edit-shipping">
              <nuxt-link to="/datos-de-envio">
                {{ shippingAddress.editLabel }}
              </nuxt-link>
            </div>
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
              <div class="payment-page__edit-shipping">
                <nuxt-link to="/datos-de-envio">
                  {{ shippingAddress.editLabel }}
                </nuxt-link>
              </div>
              <div class="payment-page__shipping__title">
                <p>
                  {{ shippingCost.title }}
                </p>
              </div>
              <p class="payment-page__shipping__method__content">
                {{ shippingCost.policyLabel }}
                <a :href="shippingCost.policyUrl">{{
                  shippingCost.policyLink
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
          <section class="payment-page__review">
            <div class="payment-page__review__title">
              <p>
                {{ reviewSection.title }}
              </p>
            </div>
            <div class="payment-page__review__content">
              <p>
                {{ reviewSection.content }}
              </p>
            </div>
          </section>
        </div>
        <!-- CART SUMMARY -->
        <div class="col-md-6 col-sm-12 payment-page__cart">
          <div class="payment-page__totals">
            <div class="payment-page__totals__values">
              <div class="payment-page__totals__values__summary">
                <div class="col-md-12 payment-page__totals__values__subtotal">
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
                  class="col-md-12 payment-page__totals__values__discount"
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
                  class="col-md-12 payment-page__totals__values__taxes"
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
                  class="col-md-12 payment-page__totals__values__shipping"
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
                  class="col-md-12 payment-page__totals__values__shipping"
                >
                  <p>{{ cartTextContent.shippingCostLabel }}</p>
                  <p>{{ cartTextContent.freeShippingLabel }}</p>
                </div>
              </div>
              <div>
                <div class="col-md-12 payment-page__totals__values__total">
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
          <div class="col-md-12 payment-page__totals__values__credit">
            <div class="col-md-8 payment-page__totals__values__credit__label">
              {{ cartSummary.credits.title }}
            </div>
            <div class="col-md-4 payment-page__totals__values__credit__value">
              <money-format
                :value="cartSummary.credits.value.amount"
                :locale="'es-co'"
                :currency-code="cartSummary.credits.value.currency"
                :subunits-value="false"
                :hide-subunits="true"
                class="payment-page__totals__values__credit__value__amount"
              ></money-format>

              <b-form inline @submit="onSubmit" @reset="onReset">
                <b-form-radio
                  v-model="credits"
                  name="credit"
                  :value="cartSummary.credits.value.amount"
                >
                </b-form-radio>
              </b-form>
            </div>
          </div>
          <div class="col-md-12 payment-page__totals__final-amount">
            <p>{{ cartSummary.finalAmountLabel }}</p>
            <money-format
              :value="totals.total + cartSummary.credits.value.amount"
              :locale="'es-co'"
              :currency-code="totals.currency"
              :subunits-value="false"
              :hide-subunits="true"
              class=""
            ></money-format>
          </div>
          <div class="col-md-12 payment-page__totals__button">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-button type="submit" variant="secondary"
                >{{ cartSummary.confirmOrderButtonLabel }}
              </b-button>
            </b-form>
          </div>
          <div class="payment-page__items-counter">
            <p>{{ cartTextContent.cartCounter }} ({{ items.length }})</p>
          </div>
          <div class="payment-page__cart-items">
            <CartCard
              v-for="product in productsInCart"
              :key="product.id"
              :product="product"
            ></CartCard>
          </div>
          <div class="payment-page__back-to-cart">
            <nuxt-link to="/carrito">
              <button>
                {{ cartSummary.backToCartButtonLabel }}
              </button>
            </nuxt-link>
          </div>
        </div>
        <!-- //END CART SUMMARY -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      credits: 0,
      show: true,
    };
  },
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

    shippingAddress() {
      return this.content('section_1');
    },
    shippingCost() {
      return this.content('section_2');
    },
    formSectionTitle() {
      return this.content('section_3').title;
    },
    reviewSection() {
      return this.content('section_4');
    },
    cartSummary() {
      return this.content('section_5');
    },
    productsInCart() {
      return this.getProducts(this.items);
    },
    cartTextContent() {
      return this.getCartSection('section_1');
    },
  },
  beforeMount() {
    this.credits = this.cartSummary.credits.value.amount;
    this.setActiveStep(3);
  },
  methods: {
    ...mapMutations('checkoutProgressBar', ['setActiveStep']),
    onSubmit(evt) {
      evt.preventDefault();
      // const data = 'SAVE ORDER IN BACKEND';
      // alert(data);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  head: {
    title: 'Finalizar Pedido',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Finaliza tu pedido',
      },
    ],
  },
};
</script>

<style></style>
