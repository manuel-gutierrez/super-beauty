<template>
  <div class="add-to-cart d-flex">
    <AddToCartCounter
      class="d-flex"
      :current-value="itemCounter"
      @counterUpdate="updateData(...arguments)"
    ></AddToCartCounter>
    <div v-if="button" class="flex-grow-1 add-to-cart__button">
      <button @click="updateCart()">Agregar al carrito</button>
    </div>
    <AddToCartModal
      v-if="modal"
      :modal-id="modalId"
      :product="product"
      :checkout-data="checkoutData"
    ></AddToCartModal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
    counter: {
      type: Boolean,
      default: true,
    },
    modalId: {
      type: String,
      default: 'product-detail-modal',
    },
    button: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      itemCounter: 1,
      pricingType: 'FIXED_PRICING',
    };
  },
  computed: {
    ...mapGetters('cart', {
      getItemQty: 'getItemQty',
    }),
    productPrice() {
      return this.getPrice('FIXED_PRICING');
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
  beforeMount() {
    const checkCounterInCart = this.getItemQty(this.product.id);
    if (checkCounterInCart) {
      this.itemCounter = checkCounterInCart;
    }
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'removeFromCart']),
    updateData(counter) {
      this.itemCounter = counter;
      if (!this.button) {
        this.updateCart();
      }
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
      if (this.modal) {
        this.$bvModal.show('product-detail-modal');
      }
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
