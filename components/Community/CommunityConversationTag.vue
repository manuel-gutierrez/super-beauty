<template>
  <div class="community-conversation-tag">{{ label }}</div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
