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
        <li @click="$emit('filter-by-variation', subCategory.id, variation.id)">
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
      <SidebarFilterCheckbox
        :label="filterItem.label"
        :type="filterItem.type"
        :options="filterItem.options"
        @update-filter="updateFilter"
      >
      </SidebarFilterCheckbox>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    subCategories: { type: Array, default: null },
    filters: { type: Object, default: null },
  },
  data() {
    return {
      filter: [],
    };
  },
  methods: {
    updateFilter(data) {
      this.filter.push(data);
    },
  },
};
</script>

<style></style>
