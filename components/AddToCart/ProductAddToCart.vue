<template>
  <div class="add-to-cart d-flex">
    <AddToCartCounter
      class="d-flex"
      @counterUpdate="updateData(...arguments)"
    ></AddToCartCounter>
    <div class="flex-grow-1 add-to-cart__button">
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
