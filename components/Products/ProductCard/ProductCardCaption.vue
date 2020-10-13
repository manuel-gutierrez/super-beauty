<template>
  <div v-if="variation == 'large'" class="product-card-caption--large">
    <h2
      v-if="title"
      :class="'product-card-caption__title--' + type + '--' + variation"
    >
      {{ title }}
    </h2>
    <p
      v-if="reference"
      :class="'product-card-caption__description--' + type + '--' + variation"
    >
      {{ reference }}
    </p>
    <div v-if="type == 'price'">
      <money-format
        :value="amount"
        :class="'product-card-caption__amount--' + type + '--' + variation"
        :locale="'es-co'"
        :currency-code="'COP'"
        :subunits-value="false"
        :hide-subunits="true"
      >
      </money-format>
    </div>
  </div>
  <div v-else class="row product-card-caption">
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
          v-if="amount && !discountedPrice"
          :value="amount"
          :class="'product-card-caption__amount--' + type"
          :locale="'es-co'"
          :currency-code="'COP'"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format>
        <money-format
          v-else-if="amount && discountedPrice"
          :value="amount"
          :class="'product-card-caption__amount--' + type + '--discount'"
          :locale="'es-co'"
          :currency-code="'COP'"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format>
        <money-format
          v-if="discountedPrice"
          :value="discountedPrice"
          :class="'product-card-caption__amount-discounted--' + type"
          :locale="'es-co'"
          :currency-code="'COP'"
          :subunits-value="false"
          :hide-subunits="true"
        >
        </money-format>
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
    discountedPrice: {
      type: Number,
      default: null,
    },
    variation: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
