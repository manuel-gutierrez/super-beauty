<template>
  <div class="wishlist-button">
    <button v-if="!inWishlist" @click="$emit('update-wishlist')">
      <b-icon class="wishlist-button__icon" icon="heart" /> Agregar a Favoritos
    </button>
    <button v-else @click="$emit('update-wishlist')">
      <b-icon class="wishlist-button__icon--selected" icon="heart-fill" />
      Agregar a Favoritos
    </button>
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
