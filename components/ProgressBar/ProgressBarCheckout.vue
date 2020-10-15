<template>
  <div>
    <div class="progress-bar-checkout">
      <div
        v-for="step in steps"
        :key="step"
        :class="
          'progress-bar-checkout__node progress-bar-checkout__node' +
          active(step)
        "
      >
        <div class="progress-bar-checkout__node__label">
          {{ labels[`step_${step}`] }}
        </div>
      </div>
    </div>
    <div class="progress-bar-checkout__bar"></div>
    <div :class="'progress-bar-checkout__bar--active--' + activeStep"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('checkoutProgressBar', {
      labels: 'getLabels',
      steps: 'getNumberOfSteps',
      activeStep: 'getActiveStep',
    }),
  },
  methods: {
    active(currentStep) {
      if (this.activeStep === currentStep) {
        return '--active';
      } else return '';
    },
  },
};
</script>

<style></style>
