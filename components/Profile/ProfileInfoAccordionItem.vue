<template>
  <b-card no-body class="mb-1 profile-info-accordion-item">
    <!-- Card Header -->
    <b-card-header
      header-tag="header"
      role="tab"
      class="profile-info-accordion-item__header"
    >
      <a v-b-toggle:collapse-1 href="#" @click.prevent>
        <div class="profile-info-accordion-item__header__title">
          <h4>1. Some Title</h4>
        </div>
        <span class="profile-info-accordion-item__header__icon">
          <b-icon
            id="tab-chevron-up"
            class="icon--open"
            icon="chevron-up"
          ></b-icon>
          <b-icon
            id="tab-chevron-down"
            class="icon--closed"
            icon="chevron-down"
          ></b-icon>
        </span>
      </a>
    </b-card-header>
    <!-- Card Body Collapse -->
    <b-collapse id="collapse-1" role="tab-panel">
      <!-- Card Body  -->
      <b-card-body>
        <b-card-text>
          <p>data data</p>
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {};
</script>

<style></style>
