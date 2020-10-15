<template>
  <div class="product-tabs">
    <div class="d-none d-md-flex">
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
    <div class="d-sm-flex-block d-md-none">
      <div class="accordion product-tabs" role="tab-list">
        <b-card
          v-for="(tab, index) in tabs"
          :key="tab.name"
          no-body
          class="mb-1"
        >
          <b-card-header
            header-tag="header"
            class="p-0 product-tabs__title"
            role="tab"
          >
            <b-button
              v-b-toggle="`tab-${index}`"
              :aria-controls="`tab-${index}`"
              block
            >
              {{ tab.name }}
              <span class="ml-auto"> <b-icon icon="chevron-down"></b-icon></span
            ></b-button>
          </b-card-header>
          <b-collapse
            :id="`tab-${index}`"
            accordion="product-tab-accordion"
            role="tab-panel"
          >
            <b-card-body>
              <b-card-text>{{ tab.data }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
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
