<template>
  <div class="community-content-search">
    <b-form>
      <b-input-group>
        <b-input-group-prepend>
          <b-icon-search />
        </b-input-group-prepend>
        <b-form-input
          id="content-search"
          v-model="search"
          size="md"
          required
          placeholder="Búsqueda"
          class=""
          @input="$emit('search-content', search)"
        >
        </b-form-input>
      </b-input-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style></style>
