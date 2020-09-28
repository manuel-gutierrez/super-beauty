<template>
  <div class="container product-page">
    <div class="row">
      <!-- Filter Side Bar -->
      <div class="product-page__sidebar col-3 d-none d-sm-none d-md-flex">
        <div class="row">
          <div class="col-12">
            <ProductSidebar
              :sub-categories="category.SubCategories"
              :filters="filters"
              @filter-by-variation="filterByVariant(categoryId, ...arguments)"
            ></ProductSidebar>
          </div>
        </div>
      </div>
      <!-- // End Side Bar -->

      <!-- Banner Section Desktop -->
      <div class="col-sm-9">
        <div class="row my-0">
          <BannerImage
            :data="banners.header.data"
            :type="banners.header.type"
            class="col-12 px-0"
          />
        </div>
        <!-- // End Banner  Section  -->
        <!-- Sort Section Desktop -->

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
            class="product-page__select ml-auto d-inline-flex justify-content-end"
          >
            <span class="product-page__sort__label align-self-center">{{
              sortSection.sortLabel
            }}</span>
            <div>
              <b-form-select
                v-model="selected"
                :options="sortSection.sortOptions"
                class="product-page__select"
              ></b-form-select>
            </div>
          </div>
        </div>
        <!-- End  Sort Section Desktop -->
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
import { mapMutations, mapGetters } from 'vuex';
export default {
  fetch() {
    this.products = this.productsInCategory(this.categoryId);
  },
  data() {
    return {
      products: null,
      categoryId: 1,
    };
  },
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
    ...mapGetters('pages/makeup', {
      banners: 'getBanners',
      sortSection: 'getSortSection',
      filters: 'getFilters',
    }),
    ...mapGetters('products', {
      productsInCategory: 'getProductsByCategory',
      productsInVariant: 'getProductsBySubcategoryVariant',
    }),
    ...mapGetters('categories', {
      categoryData: 'getCategory',
    }),
    category() {
      return this.categoryData(1);
    },
    selected: {
      set(selected) {
        this.doSort(selected);
      },
      get() {
        return this.sortSection.selected;
      },
    },
  },
  methods: {
    countProducts() {
      return this.products.length;
    },
    filterProductsBySubcategory(id) {
      return this.products.filter((product) => product.subCategoryId === id);
    },
    ...mapMutations('pages/makeup', ['setSortingValue', 'pushProducts']),
    doSort(value) {
      this.setSortingValue(value);
    },
    filterByVariant(categoryId, subCategoryId, variantId) {
      this.products = this.productsInVariant(
        categoryId,
        subCategoryId,
        variantId
      );
    },
  },
};
</script>

<style></style>
