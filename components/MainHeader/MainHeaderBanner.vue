<template>
  <div class="container-fluid header-section-banner">
    <div class="container d-flex align-items-center justifiy-content-center">
      <div class="flex-grow-1 text-center text-md-left">
        {{ section_1.text }}
      </div>
      <div class="d-none d-md-block">
        <ul>
          <li
            v-for="{ text, url } in section_2.items"
            :key="text"
            class="d-inline pl-2"
          >
            <a :href="url">{{ text }}</a>
            <span class="pipe-separator">|</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      section_1: this.$store.state.header.data.section_1,
      section_2: this.$store.state.header.data.section_2,
    };
  },
};
</script>

<style></style>
