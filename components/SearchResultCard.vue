<template>
  <div class="search-result-card" @click="$emit('redirect')">
    <div class="search-result-card__label">
      <ProductLabel
        :label-type="preview.label.type"
        :label-text="preview.label.text"
      ></ProductLabel>
    </div>

    <div class="search-result-card__image">
      <ProductCardImage
        :url="preview.image.url"
        :caption="preview.image.caption"
      ></ProductCardImage>
    </div>
    <div class="search-result-card__title">
      <h3>{{ preview.title }}</h3>
    </div>
    <div class="search-result-card__reference">
      <h4>{{ preview.reference }}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    productId: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapGetters('products', { previewItem: 'getProductPreview' }),
    preview() {
      return this.previewItem(this.productId);
    },
  },
};
</script>

<style></style>
