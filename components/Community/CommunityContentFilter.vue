<template>
  <div class="community-content-filter">
    <div class="community-content-filter__counter">
      <p>{{ counter.label }} ({{ counter.value }})</p>
    </div>

    <div class="community-content-filter__selectors">
      <div class="community-content-filter__selectors__group">
        <div class="community-content-filter__selectors__label">
          {{ firstFilter.label }}
        </div>
        <div class="community-content-filter__selectors__input">
          <b-form-select
            v-model="filterSelector_1"
            size="sm"
            :options="firstFilter.options"
            @input="$emit('do-filter', filterSelector_1)"
          ></b-form-select>
        </div>
      </div>
      <div class="community-content-filter__selectors__group">
        <div class="community-content-filter__selectors__label">
          {{ secondFilter.label }}
        </div>
        <div class="community-content-filter__selectors__input">
          <b-form-select
            v-model="filterSelector_2"
            size="sm"
            :options="secondFilter.options"
            @input="$emit('do-filter', filterSelector_2)"
          ></b-form-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    counter: {
      type: Object,
      default() {
        return {
          label: '',
          value: 0,
        };
      },
    },
    firstFilter: {
      type: Object,
      default() {
        return {
          label: '',
          options: [],
        };
      },
    },
    secondFilter: {
      type: Object,
      default() {
        return {
          label: '',
          options: [],
        };
      },
    },
  },
  data() {
    return {
      filterSelector_1: null,
      filterSelector_2: null,
    };
  },
};
</script>

<style></style>
