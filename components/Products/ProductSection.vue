<template>
  <div>
    <!-- Section 1 -->
    <div class="row">
      <h2 class="d-flex justify-content-center w-100 my-3 home-section__header">
        {{ subcategory.name }}
      </h2>
    </div>
    <div class="row-fluid">
      <div>
        <ProductCardCarousel :items-to-display="4">
          <ProductCard
            v-for="productItem in products"
            :key="productItem.id"
            :product="productItem"
            class="px-3"
          />
        </ProductCardCarousel>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: null,
    },
    subcategory: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
