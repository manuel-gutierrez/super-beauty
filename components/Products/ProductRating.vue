<template>
  <div class="row justify-content-between product-rating">
    <div v-for="index in 5" :key="index" class="p-0 m-0">
      <svg-icon
        v-if="index <= starsFilled"
        class=""
        icon="star-rating-filled"
      />
      <svg-icon v-else class="" icon="star-rating" />
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
  computed: {
    starsFilled() {
      return this.roundNumber(this.rating);
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
