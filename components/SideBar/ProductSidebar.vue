<template>
  <div>
    <!-- Sub categories Section  -->
    {{ filter }}
    <div
      v-for="subCategory in subCategories"
      :key="subCategory.name"
      class="product-page__sidebar__section"
    >
      <h3>{{ subCategory.name }}</h3>
      <ul
        v-for="variation in subCategory.subCategoriesVariation"
        :key="variation.id"
        class="product-page__sidebar__category-variation"
      >
        <li
          @click="
            updateFilter(filterNames.VARIANT, {
              variation: variation.id,
              subcategory: subCategory.id,
            })
          "
        >
          {{ variation.name }}
        </li>
      </ul>
    </div>
    <!-- Filters Section -->
    <div
      v-for="filterItem in filters"
      :key="filterItem.active"
      class="product-page__sidebar__section"
    >
      <h3>{{ filterItem.label }}</h3>

      <ProductSidebarFilterCheckbox
        v-if="
          filterItem.display === 'list' || filterItem.display === 'rating-list'
        "
        :label="filterItem.label"
        :type="filterItem.display"
        :options="filterItem.options"
        @update-filter="
          updateFilter(filterNames[filterItem.type], ...arguments)
        "
      />
      <ProductSidebarRangeSelector
        v-else-if="filterItem.display === 'range'"
        :floor="0"
        :ceil="priceRange.max"
        @update-filter="
          updateFilter(filterNames[filterItem.type], ...arguments)
        "
      ></ProductSidebarRangeSelector>
    </div>
    <slot />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    subCategories: { type: Array, default: null },
    priceRange: { type: Object, default: null },
    filters: { type: Object, default: null },
  },
  data() {
    return {
      filter: [],
    };
  },
  computed: {
    ...mapGetters('enums', { enum: 'getEnum' }),
    filterNames() {
      return this.enum('filterNames');
    },
  },
  methods: {
    updateFilter(filterName, data) {
      const filterItem = this.filter.find(
        (filter) => filter.type === filterName
      );
      if (filterItem) {
        filterItem.values = data;
      } else {
        this.filter.push({ type: filterName, values: data });
      }
    },
  },
};
</script>

<style></style>
