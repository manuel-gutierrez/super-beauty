<template>
  <div class="row justify-content-start align-items-center progress-bar-rating">
    <div class="progress-bar-rating__label">
      {{ label }}
    </div>
    <div class="progress-bar-rating__bar">
      <div
        class="progress-bar-rating__bar__fill"
        :style="calculateProgress(max, progressValue)"
      ></div>
    </div>
    <div class="progress-bar-rating__value">
      {{ progressValue }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: 'Estrellas',
    },
    progressValue: {
      type: Number,
      default: null,
    },
  },
  methods: {
    calculateProgress(max, progress) {
      const percentage = (progress / max).toFixed(2) * 100;
      return `width:${percentage}%;`;
    },
  },
};
</script>

<style></style>
