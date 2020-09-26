<template>
  <div>
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
        <li @click="$emit('filter-by-variation', variation.id)">
          {{ variation.name }}
        </li>
      </ul>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: { subCategories: { type: Array, default: null } },
};
</script>

<style></style>
