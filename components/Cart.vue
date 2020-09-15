<template>
  <div class="d-inline-flex">
    <svg-icon class="cart-icon" icon="handbag-icon" />
    <div class="counter mt-1">
      <div class="counter-number">{{ counter }}</div>
    </div>
    <div @click="addToCart">add to cart</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters('cart', { counter: 'getCartCounter' }),
  },
  methods: {
    ...mapMutations('cart', ['incrementCartCounter']),
    addToCart() {
      this.incrementCartCounter();
    },
  },
};
</script>

<style></style>
