<template>
  <client-only placeholder="Cargando..">
    <VueSlickCarousel class="carousel" v-bind="settings">
      <slot />
      <template #prevArrow="arrowOption">
        <div class="custom-arrow-prev--products">
          <b-icon
            v-if="arrowOption.currentSlide != '0'"
            icon="chevron-left"
          ></b-icon>
        </div>
      </template>
      <template #nextArrow="">
        <div class="custom-arrow-next--products">
          <b-icon icon="chevron-right"></b-icon>
        </div>
      </template>
    </VueSlickCarousel>
  </client-only>
</template>
<script>
export default {
  props: {
    itemsToDisplay: {
      type: Number,
      default: 1,
    },
    arrows: {
      type: Boolean,
      default: false,
    },
    dots: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: false,
        slidesToShow: this.itemsToDisplay,
        slidesToScroll: 1,
        dots: this.dots,
        dotsClass: 'slick-dots custom-dot-class',
        speed: 500,
        cssEase: 'ease',
        arrows: this.arrows,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              touchMove: true,
              touchThreshold: 5,
            },
          },
          {
            breakpoint: 480,
            settings: {
              touchMove: true,
              touchThreshold: 5,
            },
          },
          {
            breakpoint: 280,
            settings: {
              touchMove: true,
              touchThreshold: 5,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
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
