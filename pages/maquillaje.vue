<template>
  <div class="container product-page">
    <div class="row">
      <!-- Filter Side Bar -->
      <div class="product-page__sidebar col-2 d-none d-sm-none d-md-flex">
        <div class="row">
          <div class="col-12">
            <div
              v-for="subCategory in category.SubCategories"
              :key="subCategory.name"
              class="product-page__sidebar__filter-section"
            >
              <h3>{{ subCategory.name }}</h3>
              <ul
                v-for="variation in subCategory.subCategoriesVariation"
                :key="variation.id"
                class="product-page__sidebar__subcategory-variation"
              >
                <li>{{ variation.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- // End Side Bar -->
      <!-- Sort Section Desktop -->

      <div class="col-sm-10">
        <div class="row my-0">
          <BannerImage
            :data="banners.header.data"
            :type="banners.header.type"
            class="col-12"
          />
        </div>
        <div class="row d-none d-sm-none d-md-flex product-page__sort-section">
          <div class="col-2 product-page__counter">
            <div class="col-12 product-page__counter__number">
              {{ countProducts() }}
            </div>
            <div class="col-12 product-page__counter__text">
              {{ sortSection.productCounterLabel }}
            </div>
          </div>
          <div class="col-10 product-page__sort">
            <span class="product-page__sort__label">{{
              sortSection.sortLabel
            }}</span>
            <b-dropdown
              id="sort-dropdown"
              :text="sortSection.buttonText"
              class="m-md-2 product-page__sort__dropdown"
            >
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
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
