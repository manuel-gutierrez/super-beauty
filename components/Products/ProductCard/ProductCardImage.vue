<template>
  <div
    class="product-card-image p-0"
    :style="getBackgroundImage(url)"
    role="img"
    :aria-label="caption"
  >
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
    caption: {
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
