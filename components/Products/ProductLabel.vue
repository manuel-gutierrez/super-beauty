<template>
  <div class="col-6 px-0">
    <p :class="'product-label--' + labelType">{{ labelText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      default: null,
    },
    labelType: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
