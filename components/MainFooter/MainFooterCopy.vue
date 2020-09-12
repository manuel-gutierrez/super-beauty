<template>
  <div class="container-fluid footer-section-copy">
    <div
      class="d-flex align-items-center justify-content-center text-center copyright pt-2"
    >
      <div class="container py2">
        <p>
          ©{{ year }} {{ copyBusiness }}
          <span class="rwd-lined-inline"
            >| {{ copyDev }}
            <b-icon icon="heart-fill" variant="heart"></b-icon>
            {{ copyDevAux }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      copyBusiness: this.$store.state.footer.data.copy.business,
      copyDev: this.$store.state.footer.data.copy.dev,
      copyDevAux: this.$store.state.footer.data.copy.dev_aux,
    };
  },
};
</script>

<style></style>
