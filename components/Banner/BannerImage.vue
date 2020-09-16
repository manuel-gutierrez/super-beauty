<template>
  <div class="banner flex-grow-1">
    <div :style="getBackgroundImage(data.image.src)" :class="type">
      <BannerCaption :caption-data="data.caption"></BannerCaption>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
  data() {},
  computed: {},
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
