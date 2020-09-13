<template>
  <b-img
    v-bind="mainProps"
    alt="Super Beauty Logo"
    src="/logo/logo_super_beauty.png"
    srcset="/logo/logo_super_beauty@2x.png 2x"
  ></b-img>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        width: 191,
        height: 63,
      },
    };
  },
};
</script>

<style></style>
