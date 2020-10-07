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
      default: 6,
    },
    bullets: {
      type: Boolean,
      default: false,
    },
    arrows: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      settings: {
        centerPadding: '10px',
        focusOnSelect: true,
        infinite: false,
        slidesToShow: this.itemsToDisplay,
        slidesToScroll: 2,
        speed: 500,
        cssEase: 'ease',
        bullets: this.bullets,
        arrows: this.arrows,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: this.itemsToDisplay,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              touchMove: true,
              touchThreshold: 5,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              touchMove: true,
              touchThreshold: 5,
            },
          },
          {
            breakpoint: 280,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
