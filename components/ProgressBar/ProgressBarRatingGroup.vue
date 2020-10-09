<template>
  <div class="progress-bar-rating-group">
    <p class="progress-bar-rating-group__counter">
      {{ max }} {{ labels.RatingCounterLabel }}
    </p>
    <ProgressBarRating
      v-for="n in range(1, 5).reverse()"
      :key="n + 1"
      :max="max"
      :min="0"
      :label="getStarLabel(n)"
      :progress-value="getRatesByScore(rates, n)"
    ></ProgressBarRating>
  </div>
</template>

<script>
export default {
  props: {
    rates: {
      type: Array,
      default: null,
    },
    labels: {
      type: Object,
      default() {
        return {
          RatingLabelSingular: 'Estrella',
          RatingLabelPlural: 'Estrellas',
          RatingCounterLabel: 'Calificaciones',
        };
      },
    },
  },
  computed: {
    max() {
      return this.rates.length;
    },
    min() {
      return 0;
    },
  },
  methods: {
    getRatesByScore(rates, score) {
      return rates.reduce((result, rate) => {
        if (rate.score === score) {
          result++;
        }
        return result;
      }, 0);
    },
    getStarLabel(index) {
      if (index === 1) {
        return index + ' ' + this.labels.RatingLabelSingular;
      } else if (index && index > 0) {
        return index + ' ' + this.labels.RatingLabelPlural;
      }
    },

    range(min, max) {
      const array = [];
      let j = 0;
      for (let i = min; i <= max; i++) {
        array[j] = i;
        j++;
      }
      return array;
    },
  },
};
</script>

<style></style>
