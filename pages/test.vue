<template>
  <div class="row">
    <div class="col-4">
      <ProductSidebar
        :sub-categories="category.SubCategories"
        @filter-by-variation="change('New Word')"
      ></ProductSidebar>
    </div>
    <div class="col-8">
      <h2>{{ message }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('categories', {
      categories: 'getCategory',
    }),
    category() {
      return this.categories(1);
    },
    message: {
      set(word) {
        return word;
      },
      get() {
        return 'First Message';
      },
    },
  },
  methods: {
    change(word) {
      this.message = word;
    },
  },
};
</script>

<style></style>
