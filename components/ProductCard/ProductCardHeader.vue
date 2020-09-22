<template>
  <div class="row product-card-header">
    <div class="col-6 pl-1">
      <p :class="'product-card-header__label--' + labelType">{{ labelText }}</p>
    </div>
    <div
      class="col-6 pr-1 d-flex justify-content-end align-self-center flex-grow-1"
    >
      <WishlistProduct></WishlistProduct>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      default: null,
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
