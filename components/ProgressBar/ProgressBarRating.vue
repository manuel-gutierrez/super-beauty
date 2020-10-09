<template>
  <div
    class="row justify-content-around align-items-center progress-bar-rating"
  >
    <div class="col-sm pl-auto pr-0 progress-bar-rating__label">
      <p>{{ label }}</p>
    </div>
    <div class="col-md-8 pl-auto progress-bar-rating__bar">
      <div
        class="progress-bar-rating__bar__fill"
        :style="calculateProgress(max, progressValue)"
      ></div>
    </div>
    <div class="col-sm px-0 progress-bar-rating__value">
      <p>{{ progressValue }}</p>
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
