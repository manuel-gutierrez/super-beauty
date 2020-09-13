<template>
  <b-img
    class="logo m-auto"
    v-bind="defaultConfig"
    alt="Super Beauty Logo"
    :src="src"
    :srcset="src2x"
  ></b-img>
</template>

<script>
export default {
  data() {
    return {
      defaultConfig: {
        width: this.$store.state.header.data.actions.logo.width,
        height: this.$store.state.header.data.actions.logo.height,
      },
      src: this.$store.state.header.data.actions.logo.path.normal,
      src2x: this.$store.state.header.data.actions.logo.path['2x'],
    };
  },
};
</script>

<style></style>
