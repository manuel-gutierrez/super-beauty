<template>
  <div class="row product-card-header">
    <div class="col-6">
      <p :class="'product-card-header__label--' + labelType">{{ labelText }}</p>
    </div>
    <div class="col-6 d-flex justify-content-end align-self-center flex-grow-1">
      <WishlistProduct></WishlistProduct>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: Boolean,
      default: false,
    },
    labelType: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
