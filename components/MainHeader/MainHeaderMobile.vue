<template>
  <b-navbar toggleable type="light">
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
