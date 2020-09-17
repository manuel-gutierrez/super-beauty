<template>
  <div class="container-fluid">
    <BannerCarrousel class="row">
      <BannerImage :data="banners.promo_3.data" :type="banners.promo_3.type" />
      <BannerImage :data="banners.promo_3.data" :type="banners.promo_3.type" />
      <BannerImage :data="banners.promo_3.data" :type="banners.promo_3.type" />
    </BannerCarrousel>
    <div class="container">
      <div class="row">
        <BannerImage
          :data="banners.promo_1.data"
          :type="banners.promo_1.type"
          class="col"
        />

        <BannerImage
          :data="banners.promo_2.data"
          :type="banners.promo_2.type"
          class="col"
        />
      </div>
      <div class="row">
        <BannerImage
          :data="banners.promo_3.data"
          :type="banners.promo_3.type"
          class="col"
        />
      </div>
      <div>
        <button @click="logIn">Toggle Login</button>
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
    ...mapGetters('home', { banners: 'getBanners' }),
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
