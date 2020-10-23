<template>
  <div class="search-wrapper">
    <SearchModal />
    <b-icon-search
      class="search-icon"
      @click="openModal('search-modal')"
    ></b-icon-search>
  </div>
</template>

<script>
export default {
  methods: {
    openModal(id) {
      this.$bvModal.show(id);
    },
  },
};
</script>

<style></style>
