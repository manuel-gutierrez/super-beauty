<template>
  <div class="container product-page">
    <div class="row">
      <!-- Filter Side Bar -->

      <div class="product-page__sidebar col-3 d-none d-sm-none d-md-flex">
        <div class="row w-100">
          <div class="col-12">
            <p @click="resetFilter">RESET FILTER</p>

            <ProductSidebar
              ref="sidebarFilters"
              :sub-categories="category.SubCategories"
              :filters="filters"
              :price-range="productsPriceRange"
              @filter="updateFilter(...arguments)"
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
      productsFilter: [],
      productsSort: [],
      arr: [],
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
      productsInVariant: 'filterProductsByVariant',
      productsWithBrand: 'filterProductsByBrand',
      priceRanges: 'findLowestAndHighestPrices',
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
    productsPriceRange() {
      return this.priceRanges(this.products);
    },
    ...mapGetters('enums', { enum: 'getEnum' }),
    filterNames() {
      return this.enum('filterNames');
    },
  },
  methods: {
    countProducts() {
      return this.products.length;
    },
    filterProductsBySubcategory(id) {
      return this.products.filter((product) => product.subCategoryId === id);
    },
    ...mapMutations('pages/makeup', ['setSortingValue']),
    doSort(value) {
      this.setSortingValue(value);
    },
    filterByVariant(categoryId, subCategoryId, variantId) {
      return this.productsInVariant(categoryId, subCategoryId, variantId);
    },
    filterByBrand(categoryId, brandsId, products) {
      if (brandsId.length > 0) {
        return products.reduce((result, product) => {
          if (brandsId.includes(String(product.brandId))) {
            result.push(product);
          }
          return result;
        }, []);
      }
    },
    filterByPrice(categoryId, price, products) {
      return this.products.filter((product) => product.price >= Number(price));
    },
    filterByRate(categoryId, rates, products) {
      if (rates.length > 0) {
        return products.reduce((result, product) => {
          if (rates.includes(Math.round(product.rating))) {
            result.push(product);
          }
          return result;
        }, []);
      }
    },
    updateFilter(filterType, filterData) {
      const filterItem = this.productsFilter.find(
        (filter) => filter.type === filterType
      );
      if (filterItem) {
        filterItem.data = filterData;
      } else {
        this.productsFilter.push({ type: filterType, data: filterData });
      }
      this.products = this.filterProducts(
        this.productsInCategory(this.categoryId),
        this.productsFilter
      );
    },
    resetFilter() {
      this.$refs.sidebarFilters.clear();
      this.products = this.productsInCategory(this.categoryId);
      this.productsFilter = [];
    },

    filterProducts(products, filters) {
      return filters.reduce((result, filter) => {
        if (Array.isArray(filter.data) && filter.data.length > 0) {
          result = this.processFilter(result, filter.type, filter.data);
        }
        if (
          Object.entries(filter.data).length !== 0 &&
          filter.data.constructor === Object
        ) {
          result = this.processFilter(result, filter.type, filter.data);
        }
        return result;
      }, products);
    },
    processFilter(products, filterType, filterData) {
      switch (filterType) {
        case this.filterNames.VARIANT:
          return this.filterByVariant(
            this.categoryId,
            filterData.variationId,
            filterData.subCategoryId
          );

        case this.filterNames.BRAND:
          return this.filterByBrand(this.categoryId, filterData, products);

        case this.filterNames.PRICE:
          return this.filterByPrice(this.categoryId, filterData, products);

        case this.filterNames.RATING:
          return this.filterByRate(this.categoryId, filterData, products);
      }
    },
  },
};
</script>

<style></style>
