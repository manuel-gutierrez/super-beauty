<template>
  <div class="product-tabs">
    <b-tabs
      active-nav-item-class="product-tabs__title--active"
      active-tab-class="product-tabs__content"
      content-class="mt-3"
      fill
    >
      <b-tab
        v-for="tab in tabs"
        :key="tab.name"
        :title="tab.name"
        :title-link-class="'product-tabs__title'"
        ><p>{{ tab.data }}</p></b-tab
      >
    </b-tabs>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style></style>
