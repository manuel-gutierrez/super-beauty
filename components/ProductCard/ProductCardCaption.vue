<template>
  <div class="row product-card-caption">
    <div class="col-12 text-center p-0">
      <h2 :class="'product-card-caption__title--' + type">
        {{ title }}
      </h2>
      <p
        v-if="description"
        :class="'mb-0 product-card-caption__description--' + type"
      >
        {{ description }}
      </p>
      <money-format
        v-if="price"
        :value="price"
        :class="'product-card-caption__price--' + type"
        :locale="es"
        :currency-code="COP"
        :subunits-value="false"
        :hide-subunits="true"
      >
      </money-format>
      <money-format
        v-if="discountedPrice"
        :value="discountedPrice"
        :class="'product-card-caption__discounted-price--' + type"
        :locale="es"
        :currency-code="COP"
        :subunits-value="false"
        :hide-subunits="true"
      >
      </money-format>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'title',
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    discountedPrice: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
