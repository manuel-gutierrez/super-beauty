<template>
  <footer class="footer">
    <MainFooterLinks />
    <MainFooterBrands />
    <MainFooterCopy />
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'black',
    },
  },
};
</script>
<style></style>
