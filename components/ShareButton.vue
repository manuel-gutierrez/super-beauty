<template>
  <div>
    <div class="d-none d-md-flex share-button">
      <button @click="$emit('share-product')">
        <svg-icon class="share-button__icon" icon="share-icon" /> Compartir
      </button>
    </div>
    <div class="d-md-none share-button">
      <svg-icon
        class="share-button__icon"
        icon="share-icon"
        @click="$emit('share-product')"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
