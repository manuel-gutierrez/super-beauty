<template>
  <div
    class="product-download-image"
    :style="getBackgroundImage(url)"
    role="img"
    :aria-label="caption"
  >
    <div class="product-download-image__download-box">
      <SvgIcon icon="download-icon" />
    </div>
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
