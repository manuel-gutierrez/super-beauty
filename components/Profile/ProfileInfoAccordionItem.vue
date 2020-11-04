<template>
  <b-card no-body class="mb-1 profile-info-accordion-item">
    <!-- Card Header -->
    <b-card-header
      header-tag="header"
      role="tab"
      class="profile-info-accordion-item__header"
    >
      <a v-b-toggle="id" href="#" @click.prevent>
        <div class="profile-info-accordion-item__header__title">
          <h4>{{ title }}</h4>
        </div>
        <span class="profile-info-accordion-item__header__icon">
          <b-icon class="icon--open" icon="chevron-up"></b-icon>
          <b-icon class="icon--closed" icon="chevron-down"></b-icon>
        </span>
      </a>
    </b-card-header>
    <!-- Card Body Collapse -->
    <b-collapse :id="id" role="tab-panel">
      <!-- Card Body  -->
      <b-card-body>
        <b-card-text>
          <slot name="item-body"></slot>
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: 'collapse',
    },
  },
};
</script>

<style></style>
