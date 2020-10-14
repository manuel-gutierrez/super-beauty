<template>
  <div class="row justify-content-between product-rating">
    <div
      v-for="activeStar in starsFilled"
      :key="label + activeStar++ + '--filled'"
      class="p-0 m-0"
    >
      <svg-icon class="" icon="star-rating-filled" />
    </div>
    <div
      v-for="star in starsEmpty"
      :key="label + star++ + '--notfilled'"
      class="p-0 m-0"
    >
      <svg-icon class="" icon="star-rating" />
    </div>
    <div
      v-if="scoreVisible"
      class="w-100 product-rating__score justify-content-center align-items-center"
    >
      <div class="product-rating__score__label">
        {{ starsFilled }}<span>/5</span><span> Estrellas</span>
      </div>
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
    label: {
      type: String,
      default: 'rating-group',
    },
    scoreVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    starsFilled() {
      return this.roundNumber(this.rating);
    },
    starsEmpty() {
      return 5 - this.roundNumber(this.rating);
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
  },
};
</script>

<style></style>
