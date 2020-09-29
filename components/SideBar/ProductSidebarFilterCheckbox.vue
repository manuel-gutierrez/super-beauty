<template>
  <div>
    <b-form-group v-if="type === 'list'">
      <b-form-checkbox-group
        :id="label"
        v-model="selected"
        :options="options"
        name="flavour-1"
        stacked
        class="product-page__sidebar__checkbox-group"
        @input="emitEvent()"
      ></b-form-checkbox-group>
    </b-form-group>
    <b-form-group v-else-if="type === 'rating-list'">
      <div v-for="ratings in 5" :key="ratings + '-item'">
        <b-form-checkbox-group
          :id="label"
          v-model="selected"
          stacked
          class="product-page__sidebar__checkbox-group"
          @input="emitEvent()"
        >
          <b-form-checkbox :value="ratings"
            ><ProductRating
              :rating="Number(ratings)"
              :label="'rating-group' + ratings++"
            ></ProductRating
          ></b-form-checkbox>
        </b-form-checkbox-group>
      </div>
    </b-form-group>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: 'product-page__sidebar__checkbox-group__1',
    },
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
    clear() {
      this.selected = [];
    },
  },
};
</script>

<style></style>
