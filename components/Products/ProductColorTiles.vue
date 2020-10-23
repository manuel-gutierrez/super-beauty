<template>
  <div>
    <ul class="d-none d-md-flex color-tiles">
      <ProductImageCarousel
        :items-to-display="itemsToShowDesktop"
        :arrows="showArrows"
      >
        <li v-for="(tile, index) in colorTiles" :key="tile + '-' + index">
          <div :style="background(tile)" class="color-tile" />
        </li>
      </ProductImageCarousel>
    </ul>
    <ul class="d-sm-flex d-md-none color-tiles">
      <ProductImageCarousel
        :items-to-display="itemsToShowMobile"
        :arrows="showArrows"
      >
        <li v-for="(tile, index) in colorTiles" :key="tile + '-' + index">
          <div :style="background(tile)" class="color-tile" />
        </li>
      </ProductImageCarousel>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    colorTiles: {
      type: Array,
      default: null,
    },
    itemsToShowMobile: {
      type: Number,
      default: 7,
    },
    itemsToShowDesktop: {
      type: Number,
      default: 12,
    },
    showArrows: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    background(color) {
      return 'background:' + color;
    },
  },
};
</script>

<style></style>
