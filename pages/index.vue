<template>
  <div class="">
    <div class="container">
      <div>
        <div class="py-2">
          <button @click="logIn">Toggle Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('login', {
      isloggedIn: 'getCurrentLoginStatus',
      sessionToken: 'getSessionToken',
    }),
  },
  methods: {
    ...mapMutations('login', ['toggleLoginStatus']),
    logIn() {
      this.toggleLoginStatus();
    },
  },
};
</script>

<style></style>
