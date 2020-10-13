<!-- SvgIcon.vue -->

<template>
  <svg class="icon" :class="{ 'icon-spin': spin }">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
