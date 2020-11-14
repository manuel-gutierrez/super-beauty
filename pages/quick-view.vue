<template>
  <div class="container d-flex justify-content-center align-items-center my-5">
    <QuickViewModal :product-id="'3aad1a64-2e96-40fe-9838-97af5cde903e'">
    </QuickViewModal>

    <b-button @click="openModal('3aad1a64-2e96-40fe-9838-97af5cde903e')"
      >Abrir Vista Rápida</b-button
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
  head: {
    title: 'Vista Rápida',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Vista Rápida del producto',
      },
    ],
  },
};
</script>

<style></style>
