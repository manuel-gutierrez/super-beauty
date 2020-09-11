<template>
  <div class="container-fluid footer-section-brands">
    <div class="container py-2">
      <div class="d-flex align-items-center justify-content-center flex-wrap">
        <img
          v-for="image in images.slice(0, 11)"
          :key="image.url"
          class="mr-2"
          :src="image.url"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: this.$store.state.footer.data.images,
    };
  },
};
</script>

<style></style>
