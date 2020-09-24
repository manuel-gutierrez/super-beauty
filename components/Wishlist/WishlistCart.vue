<template>
  <div class="d-inline-flex">
    <b-icon-heart></b-icon-heart>
    <div class="counter mt-1">
      <div class="counter-number">{{ counter }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
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
