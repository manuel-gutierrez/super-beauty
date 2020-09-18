<template>
  <div class="d-inline-flex profile-wrapper">
    <svg-icon class="profile-icon" icon="profile-icon" />
    <div v-if="isLoggedIn" class="profile-data pt-1 d-none d-md-block">
      <span class="d-block">Hola {{ profile.user.name }}</span>
      <span class="d-block text-right">
        <a href="#" @click="toggleLogin">salir</a>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', { isLoggedIn: 'getCurrentLoginStatus' }),
    ...mapGetters('header', { profile: 'getProfileData' }),
  },
  methods: {
    ...mapMutations('login', ['toggleLoginStatus']),
    toggleLogin() {
      this.toggleLoginStatus();
    },
  },
};
</script>

<style></style>
