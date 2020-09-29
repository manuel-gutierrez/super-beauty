<template>
  <div>
    <!-- Sub categories Section  -->
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
              variationId: variation.id,
              subCategoryId: subCategory.id,
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

  computed: {
    ...mapGetters('enums', { enum: 'getEnum' }),
    filterNames() {
      return this.enum('filterNames');
    },
  },
  methods: {
    updateFilter(filterName, data) {
      this.$emit('filter', filterName, data);
    },
  },
};
</script>

<style></style>
