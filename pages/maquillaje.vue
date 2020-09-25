<template>
  <div class="container product-page">
    <div class="row">
      <!-- Filter Side Bar -->
      <div class="product-page__sidebar col-3 d-none d-sm-none d-md-flex">
        <div class="row">
          <div class="col-12">
            <ProductSidebar
              :sub-categories="category.SubCategories"
            ></ProductSidebar>
          </div>
        </div>
      </div>
      <!-- // End Side Bar -->
      <!-- Sort Section Desktop -->

      <div class="col-sm-9">
        <div class="row my-0">
          <BannerImage
            :data="banners.header.data"
            :type="banners.header.type"
            class="col-12 px-0"
          />
        </div>
        <div class="row d-none d-sm-none d-md-flex product-page__sort-section">
          <div class="product-page__counter justify-content-start">
            <div class="product-page__counter__number">
              {{ countProducts() }}
            </div>
            <div class="product-page__counter__text">
              {{ sortSection.productCounterLabel }}
            </div>
          </div>
          <div
            class="product-page__dropdown ml-auto d-inline-flex justify-content-end"
          >
            <span class="product-page__sort__label align-self-center">{{
              sortSection.sortLabel
            }}</span>
            <b-dropdown
              id="sort-dropdown"
              :text="sortSection.buttonText"
              class="product-page__sort__dropdown-button btn-group-sm"
            >
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <!-- // End Sort Section  -->
        <div
          v-for="subCategory in category.SubCategories"
          :key="subCategory.name"
          class="product-page__section"
        >
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
    ...mapGetters('pages/makeup', {
      banners: 'getBanners',
      sortSection: 'getSortSection',
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
