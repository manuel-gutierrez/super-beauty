<template>
  <div class="container profile-page">
    <BannerImage
      :data="banner.data"
      :type="banner.type"
      class="col-12 px-md-0 profile-page__banner"
    >
      <template v-slot:hero-caption>
        <div class="profile-page__banner__content">Hola Hola Mundo</div>
      </template>
    </BannerImage>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('pages/profile', ['getProfilePageContent']),
    banner() {
      return this.getProfilePageContent('banner');
    },
  },
};
</script>

<style></style>
