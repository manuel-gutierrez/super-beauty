<template>
  <div class="caption">
    <h2>{{ captionData.title }}</h2>
    <p v-if="captionData.discount" class="caption-number">
      {{ captionData.discount }}
    </p>
    <p v-if="captionData.description">
      {{ captionData.description }}
    </p>

    <b-button
      v-if="captionData.button"
      :href="captionData.button.url"
      class="text-center"
    >
      {{ captionData.button.text }}
    </b-button>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    captionData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>
