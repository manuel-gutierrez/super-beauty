<template>
  <div v-if="isLoggedIn" class="d-inline-flex">
    <svg-icon class="profile-icon" icon="profile-icon" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('login', ['isLoggedIn', 'token']),
  },
};
</script>

<style></style>
