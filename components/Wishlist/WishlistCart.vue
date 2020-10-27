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
  fetch() {
    const itemsIds = this.productsIds(this.productsInWishList);
    this.updateWishlistCart(itemsIds);
  },
  computed: {
    ...mapGetters('wishlist', { counter: 'getWishListCounter' }),
    ...mapGetters('products', {
      productsInWishList: 'getProductsInWishList',
    }),
  },
  methods: {
    ...mapMutations('wishlist', [
      'incrementWishlistCounter',
      'setWishlistCounter',
      'setProducts',
    ]),
    addToWishList() {
      this.incrementWishlistCounter();
    },
    updateWishlistCart(items) {
      this.setWishlistCounter(items.length);
      this.setProducts(items);
    },
    productsIds(products) {
      const productsIdArray = [];
      if (products.length > 0) {
        products.forEach((element) => {
          productsIdArray.push({ id: element.id });
        });
        return productsIdArray;
      } else {
        return productsIdArray;
      }
    },
  },
};
</script>

<style></style>
