<template>
  <div v-if="verified" class="comments-verified-tag">{{ label }}</div>
</template>
<script>
export default {
  props: {
    verified: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style></style>
