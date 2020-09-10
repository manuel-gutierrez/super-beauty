<template>
  <div class="container footer-section-copy">
    <div class="row">
      <div class="row">
        <p>© {{ year }} SUPERBEAUTY Todoos los derechos reservados.</p>
      </div>
      <div class="row"><p>| Creado con en Colombia</p></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style></style>
