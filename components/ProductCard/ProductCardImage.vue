<template>
  <div class="row product-card-image p-0" :style="getBackgroundImage(url)">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    getBackgroundImage(image) {
      return {
        backgroundImage: `url(${image})`,
      };
    },
  },
};
</script>

<style></style>
