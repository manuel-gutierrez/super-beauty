<template>
  <div v-if="!inWishlist" class="product-wishlist-icon">
    <b-icon-heart @click="togglefromWishList"></b-icon-heart>
  </div>
  <div v-else class="product-wishlist-icon--selected">
    <b-icon-heart-fill @click="togglefromWishList"></b-icon-heart-fill>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: {
    inWishlist: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('wishlist', { counter: 'getWishListCounter' }),
  },
  methods: {
    ...mapMutations('wishlist', [
      'incrementWishlistCounter',
      'decrementWishlistCounter',
    ]),
    addToWishList() {
      this.incrementWishlistCounter();
    },
    removefromWishList() {
      this.decrementWishlistCounter();
    },
    togglefromWishList() {
      if (!this.inWishlist) {
        this.incrementWishlistCounter();
        this.inWishlist = !this.inWishlist;
      } else {
        this.decrementWishlistCounter();
        this.inWishlist = !this.inWishlist;
      }
    },
  },
};
</script>

<style></style>
