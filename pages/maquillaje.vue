<template>
  <div class="container">
    <div class="row-fluid">
      <div>
        {{ countProducts() }}
        <div v-for="subCategory in category.SubCategories" :key="subCategory">
          <ProductSection
            v-if="filterProductsBySubcategory(subCategory.id).length != 0"
            :products="filterProductsBySubcategory(subCategory.id)"
            :subcategory="subCategory"
          >
            <div class="section-spacer"></div>
          </ProductSection>
        </div>
      </div>
      <div class="section-spacer"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
    ...mapGetters('products', {
      productsInCategory: 'getProductsByCategory',
    }),
    ...mapGetters('categories', {
      categoryData: 'getCategory',
    }),
    products() {
      return this.productsInCategory(1);
    },
    category() {
      return this.categoryData(1);
    },
  },
  methods: {
    countProducts() {
      return this.products.length;
    },
    filterProductsBySubcategory(id) {
      return this.products.filter((product) => product.subCategoryId === id);
    },
  },
};
</script>

<style></style>
