<template>
  <div>
    <QuickViewModal :product-id="'3aad1a64-2e96-40fe-9838-97af5cde903e'">
    </QuickViewModal>

    <b-button @click="openModal('3aad1a64-2e96-40fe-9838-97af5cde903e')"
      >Launch demo modal</b-button
    >
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
