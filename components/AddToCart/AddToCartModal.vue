<template>
  <b-modal
    :id="modalId"
    modal-class="product-detail-page__modal"
    size="lg"
    hide-footer
  >
    <template v-slot:modal-title>
      {{ modalData.title }}
    </template>
    <section class="product-detail-page__modal__order-details">
      <div class="row">
        <div class="col-md-6">
          <!-- <ProductCardImage
              :url="image.url"
              :caption="image.caption"
              class="ml-3 product-detail-page__image-detail__image"
            ></ProductCardImage> -->
          Imagen y Precio
        </div>
        <div class="col-md-6">Botones de Checkout</div>
      </div>
    </section>
    <section class="product-detail-page__modal__free-shipping">
      <p>{{ modalData.freeShippingTitle }}</p>
    </section>
    <section class="product-detail-page__modal__recommended">
      <div class="row">
        <h2 class="d-flex justify-content-center w-100 home-section__header">
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

    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
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
