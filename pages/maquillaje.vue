<template>
  <div class="container product-page">
    <div class="row">
      <!-- Filter Side Bar -->
      <div class="product-page__sidebar col-3 d-none d-sm-none d-md-flex">
        <div class="row w-100">
          <div class="col-12">
            <div class="row align-items-center">
              <div class="col-7 product-page__sidebar__header">
                <h2>
                  {{ filterSection.header }}
                </h2>
              </div>
              <div class="col-5 product-page__sidebar__clear-filter">
                <p @click="resetFilter">{{ filterSection.resetText }}</p>
              </div>
            </div>
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
      <div class="col-sm-9 product-page__banner">
        <div class="row my-0 py-0">
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
        <!-- Sort Section Mobile -->
        <div class="row d-md-none d-sm-flex product-page__sort-section-mobile">
          <div class="product-page__counter col-12 justify-content-start">
            <div class="product-page__counter__number">
              {{ countProducts() }} {{ sortSection.productCounterLabel }}
            </div>
            <div class="product-page__sort_heading">
              <h2>
                {{ filterSection.header }}
                <b-icon icon="chevron-right"></b-icon>
              </h2>
            </div>
          </div>
        </div>
        <!-- End  Sort Section Mobile -->
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

      <ScrollToTop />
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
      sections: 'getSection',
      filters: 'getFilters',
    }),
    banners() {
      return this.sections('banners');
    },
    sortSection() {
      return this.sections('sort');
    },
    filterSection() {
      return this.sections('filters');
    },
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
    filterBySustainable(categoryId, products) {
      return products.filter((product) => {
        return product.isSustainable === true;
      });
    },
    filterByNew(categoryId, products) {
      return products.filter((product) => product.new === true);
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
        case this.filterNames.OTHER:
          return this.otherFilters(filterData, products);
        // return
        default:
          return this.productsInCategory(this.categoryId);
      }
    },
    otherFilters(filterData, products) {
      return filterData.reduce((result, filter) => {
        if (filter.type === this.filterNames.SUSTAINABLE) {
          result = this.filterBySustainable(this.categoryId, products);
        }
        if (filter.type === this.filterNames.NEW) {
          result = this.filterByNew(this.categoryId, products);
        }
        return result;
      }, []);
    },
    resetFilter() {
      this.$refs.sidebarFilters.clear();
      this.products = this.productsInCategory(this.categoryId);
      this.productsFilter.length = 0;
    },
  },
};
</script>

<style></style>
