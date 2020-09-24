<template>
  <div class="scroll-to-top" @click="scrollToTop">
    <b-icon class="scroll-to-top__icon" icon="chevron-up"></b-icon>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
