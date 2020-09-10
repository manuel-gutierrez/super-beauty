<template>
  <div class="container-fluid footer-section-copy">
    <div class="container">
      <div class="text-center copyright pt-2">
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
