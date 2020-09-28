<template>
  <div class="product-sidebar__price-range">
    <label for="price-range-filter" class="w-100">
      <div class="row mr-0">
        <div
          class="product-sidebar__price-range_floor col-6 justify-content-start"
        >
          <money-format
            :value="floor"
            :locale="'es-co'"
            :currency-code="'COP'"
            :subunits-value="false"
            :hide-subunits="true"
          />
        </div>

        <div
          class="product-sidebar__price-range_ceil col-6 pr-0 justify-content-end"
        >
          <money-format
            v-if="max"
            :value="max"
            :locale="'es-co'"
            :currency-code="'COP'"
            :subunits-value="false"
            :hide-subunits="true"
            class="text-right"
          />
        </div>
      </div>
    </label>
    <b-form-input
      id="price-range-filter"
      v-model="value"
      type="range"
      :min="floor"
      :max="max"
      :step="step"
      @input="emitEvent()"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  props: {
    floor: {
      type: Number,
      default: 0,
    },
    ceil: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      value: this.floor,
    };
  },
  computed: {
    max() {
      return this.validateMaxNumber(this.ceil);
    },
  },
  methods: {
    validateMaxNumber(number) {
      if (number && number > 0) {
        return number;
      } else {
        return 0;
      }
    },
    emitEvent() {
      this.$emit('update-filter', this.value);
    },
  },
};
</script>
