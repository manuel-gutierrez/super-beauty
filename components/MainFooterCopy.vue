<template>
  <div class="container-fluid footer-section-copy">
    <div class="container">
      <div class="text-center copyright px-1 pt-2 pb-3">
        <p>©{{ year }} {{ copyBusiness }} | {{ copyDev }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      copyBusiness: 'SUPERBEAUTY Todos los derechos reservados.',
      copyDev: 'Creado con ♥ en Colombia',
    };
  },
};
</script>

<style></style>
