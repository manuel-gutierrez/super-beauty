<template>
  <div class="brands-image-list">
    <img
      v-for="image in brands.slice(0, 11)"
      :key="image.url"
      class="mr-2 brands-image-list__item"
      :src="image.url"
      :alt="image.alt"
      :width="image.width"
      :height="image.height"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('footer', {
      brands: 'getBrands',
    }),
  },
};
</script>

<style></style>
