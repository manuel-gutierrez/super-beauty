<template>
  <div>
    <div class="d-none d-md-flex wishlist-button">
      <button v-if="!inWishlist" @click="$emit('update-wishlist')">
        <b-icon class="wishlist-button__icon" icon="heart" /> Agregar a
        Favoritos
      </button>
      <button v-else @click="$emit('update-wishlist')">
        <b-icon class="wishlist-button__icon--selected" icon="heart-fill" />
        Agregar a Favoritos
      </button>
    </div>
    <div class="d-md-none wishlist-button">
      <b-icon
        v-if="!inWishlist"
        class="wishlist-button__icon"
        icon="heart"
        @click="$emit('update-wishlist')"
      />
      <b-icon
        v-else
        class="wishlist-button__icon--selected"
        icon="heart-fill"
        @click="$emit('update-wishlist')"
      />
    </div>
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
