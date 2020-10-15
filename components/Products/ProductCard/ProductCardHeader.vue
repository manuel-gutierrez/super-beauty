<template>
  <div class="row-fluid d-flex">
    <div class="col-6 px-0">
      <ProductLabel
        :label-type="labelType"
        :label-text="labelText"
      ></ProductLabel>
    </div>
    <div class="col-6 px-0 d-flex justify-content-end flex-grow-1">
      <ProductWishlistIcon
        :in-wishlist="inWishlist"
        @update-wishlist="$emit('update-wishlist')"
      ></ProductWishlistIcon>
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
    inWishlist: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style></style>
