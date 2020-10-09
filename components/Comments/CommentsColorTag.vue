<template>
  <div class="comments-color-tag">
    <b-img
      v-bind="colorProps"
      alt="Muestra del color del producto seleccionado"
    ></b-img>
    <div class="comments-color-tag__label">{{ label }} : {{ colorName }}</div>
  </div>
</template>
<script>
export default {
  props: {
    colorName: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      colorProps: {
        blank: true,
        blankColor: this.color,
        width: 16,
        height: 16,
        class: 'm-1',
        rounded: 'rounded',
      },
    };
  },
};
</script>

<style></style>
