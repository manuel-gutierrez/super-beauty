<template>
  <div v-if="!inWishlist" class="product-wishlist-icon">
    <b-icon-heart @click="$emit('update-wishlist')"></b-icon-heart>
  </div>
  <div v-else class="product-wishlist-icon--selected">
    <b-icon-heart-fill @click="$emit('update-wishlist')"></b-icon-heart-fill>
  </div>
</template>

<script>
export default {
  props: {
    inWishlist: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
