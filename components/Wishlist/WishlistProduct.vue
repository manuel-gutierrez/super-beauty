<template>
  <div v-if="!inWishlist" class="product-wishlist-icon">
    <b-icon-heart @click="addToWishList"></b-icon-heart>
  </div>
  <div v-else class="product-wishlist-icon--selected">
    <b-icon-heart-fill @click="addToWishList"></b-icon-heart-fill>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: {
    inWishlist: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters('wishlist', { counter: 'getWishListCounter' }),
  },
  methods: {
    ...mapMutations('wishlist', ['incrementWishlistCounter']),
    addToWishList() {
      this.incrementWishlistCounter();
    },
  },
};
</script>

<style></style>
