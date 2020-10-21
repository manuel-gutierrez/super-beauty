<template>
  <div class="header-section-desktop-nav__sub-menu">
    <div
      v-for="(item, index) in categoryItems.SubCategories"
      :key="item.name + index"
      class=""
    >
      <p>
        <nuxt-link
          :to="`/productos/${categoryItems.name.toLowerCase()}?filter=category&categoryId=${
            item.id
          }`"
        >
          {{ item.name }}
        </nuxt-link>
      </p>
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
