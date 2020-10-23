<template>
  <div class="container fluid">
    <b-modal id="search-modal" size="full" hide-footer no-stacking>
      <template v-slot:modal-title class="search-modal__header">
        <b-icon-search />
        <b-form-input v-model="text" placeholder="Búsqueda"></b-form-input>
      </template>
      <div class="search-modal__results">
        <SearchResultCard
          v-for="result in results"
          :key="result"
          :product-id="result"
        />
      </div>
      <div class="search-modal__popular__search"></div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      results: [
        '14e1ae62-9144-4493-b883-e892f5cd6c66',
        '6eff8473-885a-44ae-85cd-3aa39060fed1',
        '3aad1a64-2e96-40fe-9838-97af5cde903e',
        'cb3c550d-606c-4042-8124-a090c8b1bd93',
        'f9d8b665-3f5d-4505-8192-0fe522b4f9bd',
        'f0a6d055-fba7-4d29-ad42-31d911b5bd89',
      ],
    };
  },
};
</script>

<style></style>
