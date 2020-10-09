<template>
  <div class="row row-cols-2 comments-filter">
    <div class="col comments-filter__checkbox">
      <b-form-checkbox-group
        id="comments-filter-checkbox"
        v-model="checkboxes"
        :options="checkBoxOptions"
        name="comments-filter-checkbox"
        class="comments-filter__checkbox__group"
        @input="emitEvent('checkboxes', checkboxes)"
      ></b-form-checkbox-group>
    </div>
    <div class="col comments-filter__selectors">
      <section>
        <div class="comments-filter__selectors__label">Color</div>
        <div class="comments-filter__selectors__input">
          <b-form-select
            v-model="colorSelector"
            :options="colorSelectorOptions"
            @input="emitEvent('colorSelector', colorSelector)"
          ></b-form-select>
        </div>
      </section>
      <section>
        <div class="comments-filter__selectors__label">Ordenar Por</div>
        <div class="comments-filter__selectors__input">
          <b-form-select
            v-model="sortSelector"
            :options="sortSelectorOptions"
            @input="emitEvent('sortSelector', sortSelector)"
          ></b-form-select>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxes: null,
      colorSelector: null,
      sortSelector: null,
    };
  },
  computed: {
    checkBoxOptions() {
      return [
        { text: 'Productos recomendados', value: 'recommend', disabled: false },
        { text: 'Compra verificada', value: 'verified', disabled: false },
      ];
    },
    colorSelectorOptions() {
      return [
        { value: null, text: ' Selecciona ' },
        { text: 'Istambul', value: 'color-id-1', disabled: false },
        { text: 'Verde', value: 'color-id-2', disabled: false },
      ];
    },
    sortSelectorOptions() {
      return [
        { value: null, text: 'Selecciona' },
        { text: 'Antiguos', value: 'sort-id-1', disabled: false },
        { text: 'Calificación', value: 'sort-id-2', disabled: false },
      ];
    },
  },
  methods: {
    emitEvent(inputName, value) {
      console.log('filter-activated', inputName);
      console.log('filter-value', value);
    },
  },
};
</script>

<style></style>
