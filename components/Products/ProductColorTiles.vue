<template>
  <div>
    <ul class="color-tiles d-flex">
      <li
        v-for="(tile, index) in colorTiles"
        :key="tile + '-' + index"
        class="color-tile"
        :style="background(tile)"
      ></li>
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
      return 'background-color:' + color;
    },
  },
};
</script>

<style></style>
