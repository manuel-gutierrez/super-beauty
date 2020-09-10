<template>
  <div class="container-fluid footer-section-copy">
    <div class="row text-center">
      <p>
        © {{ year }} SUPERBEAUTY Todoos los derechos reservados. | Creado con en
        Colombia
      </p>
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
