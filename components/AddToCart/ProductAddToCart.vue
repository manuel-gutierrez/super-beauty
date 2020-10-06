<template>
  <div clas="add-to-cart-product d-flex justify-content-start">
    <AddToCartCounter
      class=""
      @counterUpdate="updateData(...arguments)"
    ></AddToCartCounter>
    <div class="add-to-cart-product__button">
      <button>Agregar al carrito</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemCounter: 1,
    };
  },
  methods: {
    updateData(counter) {
      this.itemCounter = counter;
    },
  },
};
</script>

<style></style>
