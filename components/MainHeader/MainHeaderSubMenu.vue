<template>
  <div class="container header-section-desktop-nav__sub-menu">
    <div
      v-for="(item, index) in categoryItems.SubCategories"
      :key="item.name + index"
      class="col header-section-desktop-nav__sub-menu__subCategory"
    >
      <div class="header-section-desktop-nav__sub-menu__subCategory__title">
        <nuxt-link
          :to="`/productos/${categoryItems.name.toLowerCase()}?filter=category&categoryId=${
            item.id
          }`"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
      <div class="header-section-desktop-nav__sub-menu__subCategory__items">
        <ul>
          <nuxt-link
            v-for="(sub, idx) in item.subCategoriesVariation"
            :key="sub.name + idx"
            :to="`/productos/${categoryItems.name.toLowerCase()}?filter=category&categoryId=${
              item.id
            }&subCategoryId=${sub.id}`"
          >
            <li @click="$emit('hide')">{{ sub.name }}</li>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryItems: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style></style>
