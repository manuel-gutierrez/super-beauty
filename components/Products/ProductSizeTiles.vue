<template>
  <div>
    <ul class="tiles d-flex">
      <li
        v-for="(tile, index) in tiles"
        :key="tile"
        :class="activeClass(index)"
      >
        {{ tile }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tiles: {
      type: Array,
      default: null,
    },
    selected: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    activeClass(index) {
      return index === this.selected ? 'tile-active' : 'tile';
    },
  },
};
</script>

<style></style>
