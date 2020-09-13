<template>
  <b-img
    class="logo"
    v-bind="desktopProps"
    alt="Super Beauty Logo"
    src="/logo/logo_super_beauty.png"
    srcset="/logo/logo_super_beauty@2x.png 2x"
  ></b-img>
</template>

<script>
export default {
  data() {
    return {
      desktopProps: {
        width: 176,
        height: 58,
      },
      mobileProps: {
        width: 176,
        height: 58,
      },
    };
  },
};
</script>

<style></style>
