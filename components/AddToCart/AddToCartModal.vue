<template>
  <b-modal :id="modalId" modal-class="add-to-cart__modal" size="lg" hide-footer>
    <template
      v-slot:modal-title
      class="row align-items-center justify-content-start add-to-cart__modal__title"
    >
      <h2>{{ modalData.title }}</h2>
    </template>
    <section class="row add-to-cart__modal__order-details">
      <div class="col-md-8">
        <div class="row justify-content-start">
          <ProductCardImage
            :url="product.images[0].url"
            :caption="product.images[0].caption"
            class="col-sm-4 add-to-cart__modal__product-image"
          ></ProductCardImage>
          <div class="col-sm add-to-cart__modal__product-detail">
            <div class="add-to-cart__modal__product-detail__name">
              <h3>{{ product.title }}</h3>
            </div>
            <div class="add-to-cart__modal__product-detail__reference">
              <p>{{ product.reference }}</p>
            </div>
            <div class="add-to-cart__modal__product-detail__sku">
              sku: {{ product.sku }}
            </div>
            <div class="add-to-cart__modal__product-detail__price">
              <money-format
                :value="checkoutData.price.amount"
                :locale="'es-co'"
                :currency-code="checkoutData.price.currency"
                :subunits-value="false"
                :hide-subunits="true"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md add-to-cart__modal__product-detail__checkout-buttons">
        <div
          class="row add-to-cart__modal__product-detail__checkout-buttons__amount"
        >
          <div class="col-sm pr-0">
            <p class="d-flex justify-content-end">
              {{ modalData.totalLabel }} ({{ checkoutData.qty }}
              {{ modalData.totalLabelSuffix }})
            </p>
          </div>
          <div
            class="col add-to-cart__modal__product-detail__checkout-buttons__amount__price"
          >
            <money-format
              :value="checkoutData.total"
              :locale="'es-co'"
              :currency-code="checkoutData.price.currency"
              :subunits-value="false"
              :hide-subunits="true"
            />
          </div>
        </div>
        <div
          class="row add-to-cart__modal__product-detail__checkout-buttons__buttons"
        >
          <nuxt-link to="/datos-de-envio">
            <button>
              {{ modalData.checkoutButtonLabel }}
            </button>
          </nuxt-link>
          <nuxt-link to="/">
            <button class="button-outline">
              {{ modalData.continueShoppingButton }}
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section
      v-if="checkoutData.total >= freeShippingValue"
      class="row-fluid justify-content-center align-items-center add-to-cart__modal__free-shipping"
    >
      <p>{{ modalData.freeShippingTitle }}</p>
    </section>
    <section class="add-to-cart__modal__recommended">
      <div class="row-fluid justify-content-center">
        <h2 class="add-to-cart__modal__recommended__header">
          {{ modalData.recommendedProductsTitle }}
        </h2>
      </div>
      <div class="row-fluid">
        <ProductCardCarousel :items-to-display="4" :bullets="true">
          <ProductCard
            v-for="productItem in recomendedProducts"
            :key="productItem.id"
            :product="productItem"
            class="px-3"
          />
        </ProductCardCarousel>
      </div>
    </section>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    modalId: {
      type: String,
      default: 'product-detail-modal',
    },
    product: {
      type: Object,
      default: null,
    },
    checkoutData: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters('products', {
      recomendedProducts: 'getRecomendedProducts',
    }),
    ...mapGetters('pages/product-detail', {
      getSection: 'getSection',
    }),
    ...mapGetters('cart', {
      freeShippingValue: 'getFreeShippingValue',
    }),
    modalData() {
      return this.getSection('modal');
    },
  },
};
</script>

<style></style>
