<template>
  <div class="add-to-cart-counter d-flex justify-content-start text-center">
    <div class="w-25 add-to-cart-counter-decrease" @click="decrease()">
      <b-icon icon="dash"></b-icon>
    </div>
    <div ref="itemCounterValue" class="w-50">{{ value }}</div>
    <div class="w-25 add-to-cart-counter-increase" @click="increase()">
      <b-icon icon="plus"></b-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    id: {
      type: String,
      default: 'add-to-counter-input',
    },
  },
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    increase() {
      if (this.value < this.max) {
        this.value++;
      } else {
        this.value = this.max;
      }
      this.$emit('counterUpdate', this.value);
    },
    decrease() {
      if (this.value > this.min) {
        this.value--;
      } else {
        this.value = this.min;
      }
      this.$emit('counterUpdate', this.value);
    },
    getValue() {
      return this.value;
    },
  },
};
</script>
