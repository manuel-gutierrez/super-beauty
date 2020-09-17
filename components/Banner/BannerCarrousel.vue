<template>
  <VueSlickCarousel class="carousel" :dots="true">
    <slot />
    <template #prevArrow="arrowOption">
      <div class="custom-arrow-prev">
        <b-icon
          v-if="arrowOption.currentSlide != '0'"
          icon="chevron-left"
        ></b-icon>
      </div>
    </template>
    <template #nextArrow="">
      <div class="custom-arrow-next">
        <b-icon icon="chevron-right"></b-icon>
      </div>
    </template>
  </VueSlickCarousel>
</template>
<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        draggable: true,
        edgeFriction: 0.3,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        swipe: true,
      },
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style></style>
