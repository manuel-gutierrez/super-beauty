<template>
  <div class="add-to-cart d-flex">
    <AddToCartCounter
      class="d-flex"
      @counterUpdate="updateData(...arguments)"
    ></AddToCartCounter>
    <div class="flex-grow-1 add-to-cart__button">
      <button @click="updateCart()">Agregar al carrito</button>
    </div>
    <AddToCartModal
      modal-id="product-detail-modal"
      :product="product"
      :checkout-data="checkoutData"
    ></AddToCartModal>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      itemCounter: 1,
      pricingType: 'VOLUME_PRICING',
    };
  },
  computed: {
    productPrice() {
      return this.getPrice('VOLUME_PRICING');
    },

    checkoutData() {
      return {
        id: this.product.id,
        qty: this.itemCounter,
        price: this.productPrice,
        total: this.getTotal(this.itemCounter, this.productPrice),
      };
    },
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'removeFromCart']),
    updateData(counter) {
      this.itemCounter = counter;
    },
    updateCart() {
      this.itemCounter > 0
        ? this.addProductToCart(this.checkoutData)
        : this.removeProductFromCart();
    },
    removeProductFromCart() {
      this.removeFromCart({ id: this.product.id });
    },
    addProductToCart(checkoutData) {
      this.addToCart(checkoutData);
      this.$bvModal.show('product-detail-modal');
    },
    getTotal(qty, price) {
      if (qty && price) {
        return Number(qty) * Number(price.amount);
      } else {
        return Error(
          `qty or price are not defined. Current Values are --> qty=${qty} price =${price}`
        );
      }
    },
    getPrice(type) {
      const pricingItem = this.product.pricing.find(
        (price) => price.pricingType === type
      );
      if (pricingItem) {
        return pricingItem.priceMoney;
      } else {
        return Error('Product do not have this price type: ' + type);
      }
    },
  },
};
</script>

<style></style>
