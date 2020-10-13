<template>
  <div>
    <ul class="d-none d-md-flex color-tiles">
      <ProductImageCarousel :items-to-display="12" :arrows="true">
        <li v-for="(tile, index) in colorTiles" :key="tile + '-' + index">
          <div :style="background(tile)" class="color-tile" />
        </li>
      </ProductImageCarousel>
    </ul>
    <ul class="d-sm-flex d-md-none color-tiles">
      <ProductImageCarousel :items-to-display="6" :arrows="true">
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
  },
  methods: {
    background(color) {
      return 'background:' + color;
    },
  },
};
</script>

<style></style>
