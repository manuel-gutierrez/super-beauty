<template>
  <div class="row product-card-caption">
    <div class="col-12 text-center p-0">
      <h2 :class="'product-card-caption__title--' + type">
        {{ title }}
      </h2>
      <p v-if="reference" :class="'product-card-caption__description--' + type">
        {{ reference }}
      </p>
      <div
        class="row product-card-caption__amount d-flex justify-content-center align-items-center"
      >
        <money-format
          v-if="amount"
          :value="amount"
          :class="'product-card-caption__amount--' + type"
          :locale="'es-co'"
          :currency-code="currency"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format>
        <!-- <money-format
          v-else-if="amount && discountedPrice"
          :value="amount"
          :class="'product-card-caption__amount--' + type + '--discount'"
          :locale="'es-co'"
          :currency-code="currency"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format> -->
        <!-- <money-format
          v-if="discountedPrice"
          :value="discountedPrice"
          :class="'product-card-caption__amount-discounted--' + type"
          :locale="'es-co'"
          :currency-code="currency"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format> -->
      </div>
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
    reference: {
      type: String,
      default: null,
    },
    amount: {
      type: Number,
      default: null,
    },
    currency: {
      type: String,
      default: 'COP',
    },
    discountedPrice: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style></style>
