<template>
  <div>
    <b-form-group>
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected"
        :options="options"
        name="flavour-1"
        plain="true"
        stacked
        class="product-page__sidebar__checkbox-group"
        @input="emitEvent()"
      ></b-form-checkbox-group>
    </b-form-group>
    <div>
      Data:
      <strong>{{ selected }}</strong>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      selected: [], // Must be an array reference!
    };
  },
  methods: {
    emitEvent() {
      this.$emit('update-filter', this.selected);
    },
  },
};
</script>

<style></style>
