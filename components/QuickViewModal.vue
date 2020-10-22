<template>
  <div>
    <b-modal
      :id="productId"
      class="quick-view-modal"
      size="lg"
      hide-footer
      no-stacking
    >
      <template v-slot:modal-title class="quick-view-modal__header">
        <h3>{{ headerContent.title }}</h3>
      </template>
      <div class="quick-view-modal__product">
        <div class="quick-view-modal__product__image">
          <ProductCardImage
            :url="product.images[0].url"
            :caption="product.images[0].caption"
            class="col-sm-4 add-to-cart__modal__product-image"
          ></ProductCardImage>
        </div>
        <div class="quick-view-modal__product__colours"></div>
      </div>
      <div class="quick-view-modal__action">
        <div class="quick-view-modal__action__rating"></div>
        <div class="quick-view-modal__action__like"></div>
      </div>
      <div class="quick-view-modal__description">
        <p>{{ product.description }}</p>
      </div>
      <div class="quick-view-modal__pricing">
        <!-- <money-format
          :value="checkoutData.price.amount"
          :locale="'es-co'"
          :currency-code="checkoutData.price.currency"
          :subunits-value="false"
          :hide-subunits="true"
        /> -->
      </div>
      <div class="quick-view-modal__sizes"></div>
      <div class="quick-view-modal__add-to-cart"></div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    productId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      modalId: null,
    };
  },
  mounted() {
    this.modalId = this.productId;
  },
  computed: {
    ...mapGetters('products', {
      getProductById: 'getProductById',
    }),
    ...mapGetters('quickViewModal', {
      getModalContent: 'getModalContent',
    }),
    headerContent() {
      return this.getModalContent('section_0');
    },
    product() {
      return this.getProductById(this.productId);
    },
  },
};
</script>

<style></style>
