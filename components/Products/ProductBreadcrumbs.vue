<template>
  <div>
    <span>{{ categoryName }} |</span>
    <span>{{ subCategoryName }} |</span>
    <span>{{ variationName }} </span>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    category: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters('categories', {
      categoryData: 'getCategory',
      getName: 'getName',
    }),
    categoryName() {
      return this.getName('category', this.category);
    },
    subCategoryName() {
      return this.getName('subcategory', this.category);
    },
    variationName() {
      return this.getName('variation', this.category);
    },
  },
};
</script>

<style></style>
