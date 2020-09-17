<template>
  <VueSlickCarousel class="carousel">
    <slot />
    <template #prevArrow="">
      <div class="custom-arrow-prev">
        <b-icon icon="chevron-left"></b-icon>
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
        arrows: true,
        dots: true,
        draggable: true,
        edgeFriction: 0.3,
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

<style>
.carousel-wrapper {
  padding: 40px;
}
.img-wrapper img {
  margin: auto;
  width: 100%;
  height: 100px;
}
</style>
