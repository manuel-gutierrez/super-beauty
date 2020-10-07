<template>
  <div class="add-to-cart d-flex">
    <AddToCartCounter
      class="d-flex"
      @counterUpdate="updateData(...arguments)"
    ></AddToCartCounter>
    <div class="flex-grow-1 add-to-cart__button">
      <button @click="updateCart()">Agregar al carrito</button>
    </div>
    <AddToCartModal modal-id="product-detail-modal"></AddToCartModal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    productId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      itemCounter: 1,
    };
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'removeFromCart']),
    updateData(counter) {
      this.itemCounter = counter;
    },
    updateCart() {
      this.itemCounter > 0
        ? this.addProductToCart()
        : this.removeProductFromCart();
    },
    removeProductFromCart() {
      this.removeFromCart({ id: this.productId });
    },
    addProductToCart() {
      this.addToCart({ id: this.productId, qty: this.itemCounter });
      this.$bvModal.show('product-detail-modal');
    },
  },
};
</script>

<style></style>
