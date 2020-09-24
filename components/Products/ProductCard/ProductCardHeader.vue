<template>
  <div class="row-fluid d-flex">
    <div class="col-6 px-0">
      <p :class="'product-card-header__label--' + labelType">{{ labelText }}</p>
    </div>
    <div class="col-6 px-0 d-flex justify-content-end flex-grow-1">
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
