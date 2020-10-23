<template>
  <div class="container fluid">
    <b-modal id="search-modal" size="full" hide-footer no-stacking>
      <template v-slot:modal-title class="search-modal__header">
        <b-icon-search />
        <b-form-input v-model="text" placeholder="Búsqueda"></b-form-input>
      </template>
      this is the search modal
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style></style>
