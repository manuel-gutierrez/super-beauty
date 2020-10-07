<template>
  <b-modal
    :id="modalId"
    modal-class="add-to-cart__modal container"
    size="lg"
    hide-footer
  >
    <template v-slot:modal-title class="row">
      {{ modalData.title }}
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
      <div class="col-md-4">Botones de Checkout</div>
    </section>
    <section class="add-to-cart__modal__free-shipping">
      <p>{{ modalData.freeShippingTitle }}</p>
    </section>
    <section class="add-to-cart__modal__recommended">
      <div class="row">
        <h2
          class="d-flex justify-content-center w-100 add-to-cart__modal__recommended__header"
        >
          {{ modalData.recommendedProductsTitle }}
        </h2>
      </div>
      <div class="row-fluid">
        <div>
          <ProductCardCarousel :items-to-display="4">
            <ProductCard
              v-for="productItem in recomendedProducts"
              :key="productItem.id"
              :product="productItem"
              class="px-3"
            />
          </ProductCardCarousel>
        </div>
      </div>
    </section>

    <b-button class="mt-3" block @click="$bvModal.hide(modalId)"
      >Close Me</b-button
    >
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
    modalData() {
      return this.getSection('modal');
    },
  },
};
</script>

<style></style>
