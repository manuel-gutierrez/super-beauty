<template>
  <div class="shipping-form-edit-dots">
    <b-icon icon="three-dots-vertical" @click="toggleVisibility()"></b-icon>
    <div :style="displayStyle" class="shipping-form-edit-dots__options">
      <a @click="$emit('delete-item')">Borrar</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayStyle: 'display:none',
    };
  },
  methods: {
    toggleVisibility() {
      if (this.displayStyle === 'display:none') {
        this.displayStyle = '';
      } else {
        this.displayStyle = 'display:none';
      }
    },
  },
};
</script>

<style></style>
