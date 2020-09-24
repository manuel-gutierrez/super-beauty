<template>
  <div class="row justify-content-between product-rating">
    <div v-for="n in roundNumber(rating)" :key="n" class="p-0 m-0">
      <svg-icon class="" icon="star-rating-filled" />
    </div>
    <div
      v-for="n in getRatingDifference(roundNumber(rating))"
      :key="n"
      class="p-0 m-0"
    >
      <svg-icon class="" icon="star-rating" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: null,
    },
  },
  methods: {
    roundNumber(number) {
      const rate = Math.round(number);
      switch (true) {
        case rate >= 5:
          return 5;
        case rate <= 0:
          return 0;
        case rate > 0 && rate < 5:
          return rate;
      }
    },
    getRatingDifference(rating) {
      return 5 - rating;
    },
  },
};
</script>

<style></style>
